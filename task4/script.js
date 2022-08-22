const TextField = document.querySelector('#text');
TextField.addEventListener('click', 
  (event) => {
    text.textContent = prompt('Изменить текст ссылки');
})

TextField.addEventListener('click', function(event) {
	event.preventDefault();
	alert('Ссылка изменится!');
});