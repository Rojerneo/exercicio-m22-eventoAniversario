AOS.init();

const dataAniversario = new Date('jun 27, 2024 10:00:00')
const timeStampAniversario = dataAniversario.getTime();

const contadorHoras = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();
    
    const tempoAteAniversario = timeStampAniversario - timeStampNow;

    const diaMs = 1000 * 60 * 60 *24;
    const horasMs = 1000 * 60 * 60;
    const minMs = 1000 * 60;

    const diasAteAniversario = Math.floor(tempoAteAniversario / diaMs);
    const horasAteAniversario = Math.floor((tempoAteAniversario % diaMs) / horasMs);
    const minsAteAniversario = Math.floor((tempoAteAniversario % horasMs) / minMs);
    const segsAteAniversario = Math.floor((tempoAteAniversario % minMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minsAteAniversario}m ${segsAteAniversario}s`;

    if(tempoAteAniversario < 0) {
        clearInterval(contadorHoras);
        document.getElementById('contador').innerHTML = "A festa já acabou! Ano que vem tem mais... até lá!"
    }

}, 1000)