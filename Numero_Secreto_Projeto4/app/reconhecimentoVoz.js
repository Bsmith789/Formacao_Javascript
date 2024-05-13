const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognitionResult || window.webkitSpeechRecognition;

var recognition = new SpeechRecognitionResult();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaChuteValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;

}

recognition.addEventListener('end', () => recognition.start());