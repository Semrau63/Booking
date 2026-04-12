const output = document.getElementById('output');

const postJSON = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

const formDataToObject = (form) => Object.fromEntries(new FormData(form).entries());

const bindForm = (id, endpoint) => {
  document.getElementById(id).addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = formDataToObject(event.target);
    if (payload.startAt && !payload.startAt.includes('T')) {
      payload.startAt = new Date(payload.startAt).toISOString();
    } else if (payload.startAt) {
      payload.startAt = new Date(payload.startAt).toISOString();
    }
    const data = await postJSON(endpoint, payload);
    output.textContent = JSON.stringify(data, null, 2);
  });
};

bindForm('accountForm', '/api/accounts');
bindForm('bookingForm', '/api/bookings');
bindForm('callForm', '/api/ai/call');
bindForm('textForm', '/api/ai/text');
bindForm('reviewForm', '/api/reviews/boost');

document.getElementById('refreshBtn').addEventListener('click', async () => {
  const res = await fetch('/api/bookings');
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});
