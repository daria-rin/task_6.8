//let input = document.querySelector('.input').value;
//let TextField = document.querySelector('#duplicateField');
//TextField.addEventListener('keydown', 
//  (event) => {
//    TextField.textContent = input.value;
//})

document.querySelector('button').onclick = myClick;
function myClick(){
    let a = document.querySelector('.input').value;
    console.log(a);
}

document.querySelector('[type="submit"]').addEventListener('click', function(event) {
    if (!confirm('Вы точно хотите вывести текст в консоль и очистить поля?')) {
      event.preventDefault();
    }
  });