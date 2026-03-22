# James Walters Grooming Website

A premium black-and-gold multi-page website starter for **jameswaltersgrooming.com** built with **Next.js**.

## Included pages
- Home
- Services
- Gallery
- Gift Cards
- Booking
- Contact

## Features
- Luxury visual styling in black and gold
- SEO-ready metadata, Open Graph image, sitemap, robots.txt, and schema.org JSON-LD
- Example gallery images you can replace with real photos
- Square booking and gift card placeholders
- Beginner-friendly content and launch checklist
- AI answering service recommendations

## Best apps/services to use
If you are brand new, use these tools:
1. **Vercel** — easiest way to host this website.
2. **Square Appointments** — booking calendar and payments.
3. **Square Gift Cards / Square Checkout** — online gift card sales.
4. **Google Business Profile** — local SEO and reviews.
5. **Formspree** or **Basin** — simple form handling without custom code.
6. **Smith.ai**, **Goodcall**, or **Twilio + OpenAI** — AI answering service.

## Quick start
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Beginner checklist
### 1) Put in your real business details
Edit `lib/site.ts`:
- phone number
- email
- address
- booking link
- gift card link

### 2) Add your real photos
Replace the SVG files in `public/images/` with actual pictures from your shop and clients.

### 3) Connect Square
- Create your Square Appointments services
- Copy your Square booking link
- Paste it into `lib/site.ts`
- Copy your Square gift card link
- Paste it into `lib/site.ts`

### 4) Set up forms
For a no-code setup:
- Use Formspree or Basin
- Point the contact and booking forms there

### 5) Launch the site
- Create a Vercel account
- Import this repository
- Add your domain `jameswaltersgrooming.com`
- Follow the DNS instructions in Vercel

### 6) Improve SEO after launch
- Create a Google Business Profile
- Ask every happy client for a review
- Post fresh images every week
- Add FAQ content and city/service landing pages later

## Notes
This project is a polished starter, not a complete clone of any proprietary platform. The booking handoff is designed to integrate smoothly with Square so you can keep operations simple.
