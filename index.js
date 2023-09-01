let pwd1 = document.querySelector('.pwd1');
let pwd2 = document.querySelector('.pwd2');
let submit = document.querySelector('button[type=submit]');

pwd1.addEventListener("input", () => {
  if(pwd1.value==pwd2.value) {
    pwd1.classList.remove('error');
    pwd1.classList.remove('error-msg');
    pwd2.classList.remove('error');
  }
  else {
    pwd1.classList.add('error');
    pwd1.classList.add('error-msg');
    pwd2.classList.add('error');
    submit.style.cursor = 'not-allowed';
  }
})

pwd2.addEventListener("input", () => {
  if(pwd1.value==pwd2.value) {
    pwd1.classList.remove('error');
    pwd1.classList.remove('error-msg');
    pwd2.classList.remove('error');
  } else {
    pwd1.classList.add('error');
    pwd1.classList.add('error-msg');
    pwd2.classList.add('error');
    submit.style.cursor = 'not-allowed';
  }
})

submit.addEventListener("onsubmit", () => {
  if(pwd1.classList.contains('error')) {
    return false;
  }
})