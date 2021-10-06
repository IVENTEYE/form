const signInBtn = document.querySelector('#sign-in-btn'),
      container = document.querySelector('.container'),
      signUpBtn = document.querySelector('#sign-up-btn');

signUpBtn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

signInBtn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});
