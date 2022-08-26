import throttle from 'lodash.throttle';

const FEEDBACK = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', throttle(onFormSubmit, 500));
form.addEventListener('input', throttle(onInputValue, 500));

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK)));
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK);
}
let formData = {};

function onInputValue(event) {
  formData = JSON.parse(localStorage.getItem(FEEDBACK)) || {};

  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(formData));
}

function inputSaveFormData() {
  const formValue = JSON.parse(localStorage.getItem(FEEDBACK));
  if (!formValue) {
    return;
  } else {
    form.input.value = formValue.email || '';
    form.textarea.value = formValue.message || '';
  }
}

inputSaveFormData();
