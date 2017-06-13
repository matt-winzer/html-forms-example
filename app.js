var submit = document.querySelector('#submit');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var feedback = document.querySelector('#feedback');
var select = document.querySelector('#select');

submit.addEventListener('click', function(event) {
  //Prevent the default form submission action
  event.preventDefault();

  //Log the value that the user has input
  console.log('username:', username.value);
  //Reset the form field
  username.value = '';

  console.log('password:', password.value);
  password.value = '';

  console.log('feedback:', feedback.value);
  feedback.value = '';

  console.log('select:', select.value);
  select.value = 'option-1';
});
