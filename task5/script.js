const inputText = document.getElementById('inputText')
const duplicateField = document.getElementById('duplicateField')
const clearForm = document.getElementById('clearForm')

inputText.oninput = function() {
  duplicateField.textContent = inputText.value
}

clearForm.addEventListener('click', function(event) {
  console.log(inputText.value);
  inputText.value = '';
  duplicateField.textContent = '';
  event.preventDefault();
})