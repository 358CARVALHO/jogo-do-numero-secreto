/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogo do numero secreto'; */

/* let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'escolha um numero entre 1 e 10'; */
let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ()
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p','escolhe o numero secreto');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute== numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `voce descobriu com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute>numeroSecreto) {
            exibirTextoNaTela('p','o numero secreto é menor');
        }else{
            exibirTextoNaTela('p','o numero secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista==numeroEscolhido) {
        listaDeNumerosSorteados=[]
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        return listaDeNumerosSorteados.push(numeroEscolhido);
    }
}

function limparCampo (){
    chute=document.querySelector('input')
    chute= '';
}

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);

}