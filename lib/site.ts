export const siteConfig = {
  name: 'James Walters Grooming',
  domain: 'https://jameswaltersgrooming.com',
  phone: '(214) 555-0199',
  phoneHref: 'tel:+12145550199',
  email: 'hello@jameswaltersgrooming.com',
  address: '1208 Gold Street, Dallas, TX 75201',
  bookingUrl: 'https://squareup.com/appointments/book/demo-james-walters-grooming',
  squareGiftCardUrl: 'https://squareup.com/gift/demo-james-walters-grooming',
  aiAssistantUrl: 'https://squareup.com/us/en/appointments',
  description:
    'Luxury men\'s grooming, beard sculpting, scalp treatments, and premium membership care in a bold black-and-gold studio experience.',
  keywords: [
    'men\'s grooming',
    'barber shop Dallas',
    'luxury grooming',
    'beard trim',
    'scalp treatment',
    'black and gold barber website',
    'Square Appointments website',
  ],
};

export const services = [
  {
    name: 'Signature Grooming Session',
    duration: '60 min',
    price: '$85',
    description: 'Precision haircut, beard shaping, hot towel finish, brow clean up, and styling consultation.',
  },
  {
    name: 'Executive Beard Sculpt',
    duration: '40 min',
    price: '$55',
    description: 'Detailed line work, beard conditioning, razor neckline cleanup, and aftercare recommendations.',
  },
  {
    name: 'Scalp Revival Treatment',
    duration: '45 min',
    price: '$65',
    description: 'Steam therapy, detox scrub, nourishing scalp mask, and tension-relief massage for healthy growth.',
  },
  {
    name: 'Father & Son Experience',
    duration: '75 min',
    price: '$120',
    description: 'A polished shared grooming appointment with coordinated cuts, refreshments, and commemorative photos.',
  },
  {
    name: 'Wedding Weekend Package',
    duration: '90 min',
    price: '$150',
    description: 'Pre-event cut, beard finish, facial detailing, and timeline planning for grooms and wedding parties.',
  },
  {
    name: 'Monthly Membership',
    duration: 'Ongoing',
    price: '$199/mo',
    description: 'Two signature visits monthly, priority booking, discounts on products, and concierge rescheduling.',
  },
] as const;

export const galleryImages = [
  {
    src: '/images/gallery-cut-1.svg',
    alt: 'Luxury barber chair with black and gold styling station',
    title: 'Studio Finish',
  },
  {
    src: '/images/gallery-cut-2.svg',
    alt: 'Client receiving beard shaping treatment',
    title: 'Beard Sculpt',
  },
  {
    src: '/images/gallery-cut-3.svg',
    alt: 'Premium grooming tools and accessories displayed in gold',
    title: 'Premium Tools',
  },
  {
    src: '/images/gallery-cut-4.svg',
    alt: 'Scalp treatment in a modern men\'s grooming studio',
    title: 'Scalp Revival',
  },
  {
    src: '/images/gallery-cut-5.svg',
    alt: 'Close-up of a styled haircut with textured finish',
    title: 'Texture & Style',
  },
  {
    src: '/images/gallery-cut-6.svg',
    alt: 'Black and gold reception area in a high-end grooming salon',
    title: 'Lounge Experience',
  },
] as const;

export const steps = [
  'Choose a service or package that fits the visit.',
  'Pick a preferred day and time in the booking page.',
  'Submit contact information for confirmations and reminders.',
  'Collect payment or deposit through Square Checkout or Square Appointments.',
  'Send reminders and FAQs with an AI receptionist workflow.',
] as const;

export const checklist = [
  {
    title: 'Launch the website',
    items: [
      'Buy or connect the jameswaltersgrooming.com domain to your hosting provider.',
      'Set up this Next.js project on Vercel for the easiest launch and updates.',
      'Add your real phone, email, business hours, and address in lib/site.ts.',
    ],
  },
  {
    title: 'Connect bookings',
    items: [
      'Create a Square Appointments account and build your service menu.',
      'Replace the demo Square booking and gift card links with your real links.',
      'Turn on deposits, cancellation rules, and automatic appointment reminders.',
    ],
  },
  {
    title: 'Set up AI answering',
    items: [
      'Use an AI receptionist provider such as Smith.ai, Goodcall, or a Twilio + OpenAI workflow.',
      'Give the AI your hours, services, pricing, address, FAQ answers, and cancellation rules.',
      'Route missed calls, web chat, and SMS responses into one shared inbox.',
    ],
  },
  {
    title: 'Improve SEO',
    items: [
      'Create a Google Business Profile and match your business name, phone, and address exactly.',
      'Add real service photos every week and ask happy clients for Google reviews.',
      'Create city-specific service pages later if you target multiple neighborhoods.',
    ],
  },
] as const;
