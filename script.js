let botao = document.querySelector('#btl');
let tipbtl = document.querySelector('#tip')
let feedback = document.querySelector('#feedback');


botao.addEventListener('click', function (event) {
    event.preventDefault();

let inputA = document.querySelector('#campo-a');
    let inputB = document.querySelector('#campo-b');
    let valorA = parseInt(inputA.value);
    let valorB = parseInt(inputB.value);

    if (inputA.value.trim() === '' || inputB.value.trim() === ''){
        window.alert('Preencha os campos !')
        return
    }
   
    if (valorB >= valorA) {
        inputA.classList.remove('input-invalido')
        inputB.classList.remove('input-invalido')
        let mensagem = document.createElement('p');
        mensagem.innerText = 'mensagem validada com sucesso';
        mensagem.classList.add('feedback-validado')
        feedback.innerHTML = '';
        mensagem.style.color = 'green'
        inputA.classList.add('input-valido')
        inputB.classList.add('input-valido')
        feedback.appendChild(mensagem);


    } else {
        inputA.classList.remove('input-valido')
        inputB.classList.remove('input-valido')
        let mensagem = document.createElement('p');
        mensagem.innerText = 'Valor de B precisa ser maior que A !';
        mensagem.classList.add('feedback-validado')
        feedback.innerHTML = '';
        mensagem.style.color = 'red'
        inputA.classList.add('input-invalido')
        inputB.classList.add('input-invalido')
        feedback.appendChild(mensagem)
    }
});

tipbtl.addEventListener('click', function (e) {
    window.alert('Como funciona: O campo B sempre deve ser maior que A, caso contrario será exibido uma mensagem ')
})

