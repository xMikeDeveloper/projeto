function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
     
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(audio);
    }
}