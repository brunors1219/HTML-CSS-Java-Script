let imagem = document.querySelector('img');

imagem.onclick = function(){
    let meuSrc = imagem.getAttribute('src');
    if(meuSrc === 'Imagem/Imagem-1.png') {
        imagem.setAttribute ('src', 'Imagem/Imagem-2.png');
    }else{
    imagem.setAttribute ('src', 'Imagem/Imagem-1.png');
    }
}

let Botao = document.querySelector ('button');
let cabecalho = document.querySelector('h1');

function defineNomeUsuario(){
    let meuNome = prompt ('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    cabecalho.textContent = 'Bem Vindo, '+ meuNome;
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    cabecalho.textContent= ' Bem Vindo, '+ nomeGuardado;
}
 Botao.onclick = function() { defineNomeUsuario ();
 }

 function defineNomeUsuario(){
    let meuNome = prompt('Não foi digitado nenhum nome, por favor, digite seu nome:');
    if(!meuNome || meuNome === null) { 
        defineNomeUsuario();
    }else{
        localStorage.setItem('nome', meuNome);
        cabecalho.innerHTML = 'Bem vindo,' + meuNome;
    }
}