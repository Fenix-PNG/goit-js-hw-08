import throttle from 'lodash.throttle';

const FEEDBACK = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputValue, 500));
form.addEventListener('submit', throttle(onSubmitForm, 500));
let formData = {};
function onInputValue(event) {
  event.preventDefault();
  formData = JSON.parse(localStorage.getItem(FEEDBACK)) || {};
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK, JSON.stringify(formData));
  console.log(localStorage.getItem(FEEDBACK));
  console.log(formData);
}

function onSubmitForm() {
  if (form[0].value === '' || form[1].value === '') {
    alert('All fields must be filled');
  } else {
    form.reset();
    localStorage.removeItem(FEEDBACK);
  }
}

let formValue = {};
function inputSaveFormData() {
  formValue = JSON.parse(localStorage.getItem(FEEDBACK)) || {};
  console.log(formValue.message);
  console.log(formValue.message);
  if (!formValue) {
    return;
  } else {
    form[0].value = formValue.email || '';
    form[1].value = formValue.message || '';
  }
}
inputSaveFormData();
