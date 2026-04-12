const services = {
  signature: 75,
  executive: 65,
  kids: 40,
  scalp: 55
};

const serviceDescriptions = {
  signature: 'Precision haircut, hot towel treatment, beard shaping, mini facial cleanse, and finishing consultation.',
  executive: 'Detailed fade, razor lineup, premium beard contouring, and long-lasting styling finish.',
  kids: 'Calm and photo-ready haircut service for younger guests with home-care recommendations.',
  scalp: 'Steam shave, scalp hydration treatment, and massage for relaxation and sharp detail.'
};

const form = document.querySelector('#booking-form');
if (form) {
  const service = document.querySelector('#service');
  const barber = document.querySelector('#barber');
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const nameInput = document.querySelector('#guest-name');
  const phone = document.querySelector('#phone');
  const notes = document.querySelector('#notes');
  const addOnButtons = document.querySelectorAll('[data-addon]');
  const summaryService = document.querySelector('#summary-service');
  const summaryBarber = document.querySelector('#summary-barber');
  const summaryDate = document.querySelector('#summary-date');
  const summaryTime = document.querySelector('#summary-time');
  const summaryAddOns = document.querySelector('#summary-addons');
  const summaryTotal = document.querySelector('#summary-total');
  const summaryDescription = document.querySelector('#summary-description');
  const result = document.querySelector('#booking-result');

  const state = { addons: [] };

  function renderSummary() {
    const basePrice = services[service.value];
    const total = basePrice + state.addons.length * 15;
    summaryService.textContent = service.options[service.selectedIndex].text;
    summaryDescription.textContent = serviceDescriptions[service.value];
    summaryBarber.textContent = barber.value;
    summaryDate.textContent = date.value || 'Choose a date';
    summaryTime.textContent = time.value;
    summaryAddOns.textContent = state.addons.length ? state.addons.join(', ') : 'None selected';
    summaryTotal.textContent = `$${total}`;
  }

  addOnButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.addon;
      if (!value) return;
      if (state.addons.includes(value)) {
        state.addons = state.addons.filter((item) => item !== value);
        button.classList.remove('active');
      } else {
        state.addons.push(value);
        button.classList.add('active');
      }
      renderSummary();
    });
  });

  [service, barber, date, time].forEach((element) => element.addEventListener('change', renderSummary));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderSummary();
    const booking = {
      guestName: nameInput.value,
      phone: phone.value,
      service: service.options[service.selectedIndex].text,
      barber: barber.value,
      date: date.value,
      time: time.value,
      notes: notes.value,
      addons: state.addons,
      total: summaryTotal.textContent,
      requestedAt: new Date().toISOString()
    };

    localStorage.setItem('jwg-booking-request', JSON.stringify(booking));
    result.innerHTML = `
      <strong>Appointment request received</strong>
      <p>${booking.guestName}, your ${booking.service} request for ${booking.date} at ${booking.time} with ${booking.barber} has been saved in this demo. Connect this step to Square payments, text confirmations, and your AI answering workflow for live operations.</p>
    `;
    form.reset();
    state.addons = [];
    addOnButtons.forEach((button) => button.classList.remove('active'));
    renderSummary();
  });

  renderSummary();
}
