const services = [
  { id: 'classic-cut', name: 'Classic Cut', duration: 30, price: 40, deposit: 10 },
  { id: 'fade-beard', name: 'Skin Fade + Beard', duration: 45, price: 60, deposit: 15 },
  { id: 'lux-groom', name: 'Luxury Grooming Package', duration: 60, price: 95, deposit: 25 },
  { id: 'kids-cut', name: 'Kids Cut', duration: 25, price: 30, deposit: 8 },
];

const barbers = ['James Walters', 'Andre', 'Marcus'];
const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '13:00', '14:00', '15:00', '16:00'];

const serviceSelect = document.querySelector('#service');
const barberSelect = document.querySelector('#barber');
const timeSelect = document.querySelector('#time');
const bookingForm = document.querySelector('#booking-form');
const appointmentsList = document.querySelector('#appointments');
const confirmation = document.querySelector('#confirmation');
const waitlistForm = document.querySelector('#waitlist-form');
const waitlistEl = document.querySelector('#waitlist');

const metricBookings = document.querySelector('#metric-bookings');
const metricRevenue = document.querySelector('#metric-revenue');
const metricDeposits = document.querySelector('#metric-deposits');
const metricWaitlist = document.querySelector('#metric-waitlist');

const state = {
  appointments: [],
  waitlist: [],
};

function init() {
  services.forEach((service) => {
    serviceSelect.insertAdjacentHTML('beforeend', `<option value="${service.id}">${service.name} • $${service.price}</option>`);
  });

  barbers.forEach((barber) => {
    barberSelect.insertAdjacentHTML('beforeend', `<option value="${barber}">${barber}</option>`);
  });

  timeSlots.forEach((slot) => {
    timeSelect.insertAdjacentHTML('beforeend', `<option value="${slot}">${slot}</option>`);
  });

  render();
}

function findService(id) {
  return services.find((service) => service.id === id);
}

function render() {
  appointmentsList.innerHTML = state.appointments.length
    ? state.appointments
        .map(
          (appointment) => `
      <li>
        <strong>${appointment.time}</strong> — ${appointment.name} (${appointment.serviceName})
        <br />
        <small>${appointment.barber} • ${appointment.date}</small>
      </li>
    `,
        )
        .join('')
    : '<li>No appointments yet.</li>';

  waitlistEl.innerHTML = state.waitlist.length
    ? state.waitlist
        .map(
          (entry) => `
      <li>
        <strong>${entry.name}</strong> waiting for ${entry.service}
      </li>
    `,
        )
        .join('')
    : '<li>No one is currently waiting.</li>';

  const bookings = state.appointments.length;
  const revenue = state.appointments.reduce((sum, a) => sum + a.price, 0);
  const deposits = state.appointments.reduce((sum, a) => sum + a.deposit, 0);

  metricBookings.textContent = String(bookings);
  metricRevenue.textContent = `$${revenue}`;
  metricDeposits.textContent = `$${deposits}`;
  metricWaitlist.textContent = String(state.waitlist.length);
}

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const service = findService(serviceSelect.value);
  const isMember = document.querySelector('#membership').checked;
  const discount = isMember ? 0.85 : 1;

  const appointment = {
    serviceId: service.id,
    serviceName: service.name,
    barber: barberSelect.value,
    date: document.querySelector('#date').value,
    time: timeSelect.value,
    name: document.querySelector('#name').value,
    phone: document.querySelector('#phone').value,
    email: document.querySelector('#email').value,
    price: Math.round(service.price * discount),
    deposit: service.deposit,
  };

  state.appointments.push(appointment);
  render();

  confirmation.textContent = `Booked ${appointment.serviceName} for ${appointment.name}. Deposit of $${appointment.deposit} captured. Reminder scheduled via SMS + email.`;
  bookingForm.reset();
});

waitlistForm.addEventListener('submit', (event) => {
  event.preventDefault();

  state.waitlist.push({
    name: document.querySelector('#waitlist-name').value,
    service: document.querySelector('#waitlist-service').value,
  });

  waitlistForm.reset();
  render();
});

init();
