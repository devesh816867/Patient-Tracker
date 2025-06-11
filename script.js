// Registration form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const message = document.getElementById('regMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual submission

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const age = parseInt(form.age.value);
    const gender = form.gender.value;
    const contact = form.contact.value.trim();

    if (!name || !email || !password || !age || !gender || !contact) {
      message.textContent = "Please fill in all required fields.";
      message.style.color = "red";
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      message.textContent = "Contact number must be 10 digits.";
      message.style.color = "red";
      return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    // Reset the form after success
    form.reset();
  });
});


// Login form validation
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginMsg = document.getElementById('loginMessage');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = loginForm.loginEmail.value.trim();
      const password = loginForm.loginPassword.value;

      if (!email || !password) {
        loginMsg.textContent = "Please enter both email and password.";
        loginMsg.style.color = "red";
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        loginMsg.textContent = "Invalid email format.";
        loginMsg.style.color = "red";
        return;
      }

      // Dummy logic: Assume successful login for any non-empty input
      loginMsg.textContent = "Login successful!";
      loginMsg.style.color = "green";

      // Optionally reset form
      loginForm.reset();
    });
  }
});


// Appointment form validation
document.addEventListener('DOMContentLoaded', () => {
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentMsg = document.getElementById('appointmentMessage');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const doctor = appointmentForm.doctor.value;
      const date = appointmentForm.date.value;
      const time = appointmentForm.time.value;

      if (!doctor || !date || !time) {
        appointmentMsg.textContent = "All fields are required.";
        appointmentMsg.style.color = "red";
        return;
      }

      // Basic check for past date
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // reset time for accurate comparison

      if (selectedDate < today) {
        appointmentMsg.textContent = "Date cannot be in the past.";
        appointmentMsg.style.color = "red";
        return;
      }

      appointmentMsg.textContent = "Appointment booked successfully!";
      appointmentMsg.style.color = "green";
      appointmentForm.reset();
    });
  }
});