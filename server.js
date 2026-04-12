import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';

const PORT = process.env.PORT || 3000;

const db = {
  accounts: [
    {
      id: 'demo-account',
      businessName: 'FutureGlow Studio',
      ownerName: 'Owner',
      websiteTheme: 'neon',
      teamMembers: [
        { id: 'm1', name: 'Alex', role: 'Stylist', canCustomize: true },
        { id: 'm2', name: 'Riley', role: 'Barber', canCustomize: true }
      ],
      settings: {
        aiPhoneCallingEnabled: true,
        aiTextingEnabled: true,
        rebookingWindowDays: 28,
        googleReviewBoosterEnabled: true
      }
    }
  ],
  bookings: [],
  messages: [],
  callLogs: []
};

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml'
};

const sendJSON = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
};

const parseBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
};

const aiRebookingDate = (lastServiceISO, cycleDays = 28) => {
  const date = new Date(lastServiceISO);
  date.setDate(date.getDate() + cycleDays);
  return date.toISOString();
};

const reviewMessage = (name, businessName) =>
  `Thanks ${name}! If you loved ${businessName}, would you mind dropping a Google review? It helps local clients find us fast.`;

const routeApi = async (req, res, path) => {
  if (req.method === 'OPTIONS') {
    sendJSON(res, 200, { ok: true });
    return;
  }

  if (path === '/api/health' && req.method === 'GET') {
    sendJSON(res, 200, { status: 'ok', app: 'Booking AI Suite' });
    return;
  }

  if (path === '/api/accounts' && req.method === 'GET') {
    sendJSON(res, 200, db.accounts);
    return;
  }

  if (path === '/api/accounts' && req.method === 'POST') {
    const body = await parseBody(req);
    const account = {
      id: randomUUID(),
      businessName: body.businessName,
      ownerName: body.ownerName,
      websiteTheme: body.websiteTheme || 'modern',
      teamMembers: body.teamMembers || [],
      settings: {
        aiPhoneCallingEnabled: true,
        aiTextingEnabled: true,
        rebookingWindowDays: 28,
        googleReviewBoosterEnabled: true,
        ...body.settings
      }
    };
    db.accounts.push(account);
    sendJSON(res, 201, account);
    return;
  }

  if (path === '/api/bookings' && req.method === 'POST') {
    const body = await parseBody(req);
    const booking = {
      id: randomUUID(),
      accountId: body.accountId,
      clientName: body.clientName,
      clientPhone: body.clientPhone,
      service: body.service,
      employeeId: body.employeeId,
      startAt: body.startAt,
      createdAt: new Date().toISOString(),
      smartRebookAt: aiRebookingDate(body.startAt, body.rebookingWindowDays || 28)
    };
    db.bookings.push(booking);

    db.messages.push({
      id: randomUUID(),
      type: 'text',
      bookingId: booking.id,
      to: booking.clientPhone,
      body: `Booked! ${booking.service} is confirmed for ${new Date(booking.startAt).toLocaleString()}.`
    });

    sendJSON(res, 201, booking);
    return;
  }

  if (path === '/api/bookings' && req.method === 'GET') {
    sendJSON(res, 200, db.bookings);
    return;
  }

  if (path === '/api/ai/call' && req.method === 'POST') {
    const body = await parseBody(req);
    const log = {
      id: randomUUID(),
      accountId: body.accountId,
      to: body.to,
      goal: body.goal || 'Confirm appointment',
      transcript: `AI Agent: Hi! This is your automated assistant from ${body.businessName}. I'm calling to ${body.goal}.`,
      provider: 'FREE-MODE-SIMULATION',
      createdAt: new Date().toISOString()
    };
    db.callLogs.push(log);
    sendJSON(res, 201, log);
    return;
  }

  if (path === '/api/ai/text' && req.method === 'POST') {
    const body = await parseBody(req);
    const message = {
      id: randomUUID(),
      accountId: body.accountId,
      type: 'text',
      to: body.to,
      body: body.body,
      provider: 'FREE-MODE-SIMULATION',
      createdAt: new Date().toISOString()
    };
    db.messages.push(message);
    sendJSON(res, 201, message);
    return;
  }

  if (path === '/api/reviews/boost' && req.method === 'POST') {
    const body = await parseBody(req);
    const text = reviewMessage(body.clientName, body.businessName);
    const booster = {
      id: randomUUID(),
      accountId: body.accountId,
      to: body.clientPhone,
      body: text,
      kind: 'google-review-booster'
    };
    db.messages.push(booster);
    sendJSON(res, 201, booster);
    return;
  }

  sendJSON(res, 404, { error: 'Not found' });
};

const serveStatic = async (res, urlPath) => {
  const requested = urlPath === '/' ? '/index.html' : urlPath;
  const safePath = requested.replace(/\.\./g, '');
  const fullPath = join(process.cwd(), 'public', safePath);

  try {
    const file = await readFile(fullPath);
    res.writeHead(200, { 'Content-Type': mimeTypes[extname(fullPath)] || 'text/plain' });
    res.end(file);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname.startsWith('/api/')) {
    try {
      await routeApi(req, res, url.pathname);
    } catch (error) {
      sendJSON(res, 500, { error: 'Server error', detail: error.message });
    }
    return;
  }

  await serveStatic(res, url.pathname);
});

server.listen(PORT, () => {
  console.log(`Booking AI Suite running on http://localhost:${PORT}`);
});
