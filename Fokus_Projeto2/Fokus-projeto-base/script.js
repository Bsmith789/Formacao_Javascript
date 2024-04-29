const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');


const musica = new Audio('/Fokus_Projeto2/Fokus-projeto-base/sounds/luna-rise-part-one.mp3');
const audioIniciar = new Audio('/Fokus_Projeto2/Fokus-projeto-base/sounds/play.wav');
const audioPausar = new Audio('/Fokus_Projeto2/Fokus-projeto-base/sounds/pause.mp3');
const audioFinalizar = new Audio('/Fokus_Projeto2/Fokus-projeto-base/sounds/beep.mp3');


const imagemIniciarOuPausar = document.querySelector('.app__card-primary-butto-icon')

let tempoDecorrido = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorrido = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/Fokus_Projeto2/Fokus-projeto-base/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;

        case "descanso-curto":
            titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;

        case "descanso-longo":
            titulo.innerHTML = `
                Hora de voltar a superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorrido <= 0) {
        audioFinalizar.play();
        alert('Tempo Finalizado!');
        zerar()
        return;
    }
    tempoDecorrido -= 1;
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId) {
        audioPausar.play();
        zerar()
        return
    }
    audioIniciar.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar";
    imagemIniciarOuPausar.setAttribute('src', "../Fokus-projeto-base/imagens/pause.png");
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    imagemIniciarOuPausar.setAttribute('src', "../Fokus-projeto-base/imagens/play_arrow.png");
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-BR', {minute: '2-digit', second: '2-digit'})

    tempoNaTela.innerHTML = `
        ${tempoFormatado}
    `
}

mostrarTempo()