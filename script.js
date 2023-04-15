let botao = document.querySelector('#btl');
let feedback = document.querySelector('#feedback');

botao.addEventListener('click', function(event) {
    event.preventDefault();

    let inputA = document.querySelector('#campo-a');
    let inputB = document.querySelector('#campo-b');
    let valorA = parseInt(inputA.value);
    let valorB = parseInt(inputB.value);

    if (valorB >= valorA) {
        
        let mensagem = document.createElement('p');
        mensagem.innerText = 'mensagem validada com sucesso';
        mensagem.classList.add('feedback-validado')
        feedback.innerHTML = '';
        mensagem.style.color = 'green'
        feedback.appendChild(mensagem);
    } else {
        
        let mensagem = document.createElement('p');
        mensagem.innerText = 'Valor de B presisa ser maior que A !';
        mensagem.classList.add('feedback-validado')
        feedback.innerHTML = '';
        mensagem.style.color = 'red'
        feedback.appendChild(mensagem);
    }
});
