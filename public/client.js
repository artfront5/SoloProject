const regaForm = document.querySelector('#createUser');
regaForm.addEventListener('submit', async (event) => {
  // чтобы страница не прогружалась
  event.preventDefault();
  const {
    action, method, email, password,
  } = event.target;

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await response.text();
  if (response.status === 201) {
    window.location.assign('/login');
  } else {
    window.location.assign('/erroe');
  }
});
