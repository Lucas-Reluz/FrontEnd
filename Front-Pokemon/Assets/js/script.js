let nome = window.document.getElementById('nome')
let senha = window.document.getElementById('senha')

function acao(){
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
}

function fechar(){
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';
}


function validaNome() {
    let txt = document.querySelector('#txtnome')
    
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaSenha(){
    let txtsenha = document.querySelector('#txtsenha')
    if (senha.value.length < 7){
        txtsenha.innerHTML = 'Senha Curta'
        txtsenha.style.color = 'red'
    }
    else{
     txtsenha.innerHTML = ''
    }
}
/* 
por tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/