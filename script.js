const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const comment = document.querySelector('textarea').value;
})