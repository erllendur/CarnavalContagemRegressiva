const dias = document.getElementById('dias')
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Defina a data alvo para a contagem regressiva
const dataAlvo = new Date('2024-02-08T00:00:00'); // Ajuste a data conforme necessário

const relogio = setInterval(function contagemRegressiva() {
  let agora = new Date();
  let diferenca = dataAlvo - agora;

  if (diferenca <= 0) {
    clearInterval(relogio);  // Para o relógio quando a contagem regressiva atinge zero
    alert("Contagem regressiva concluída!");
    return;
  }

  let diasSemana = Math.floor(diferenca / (24 * 60 * 60 * 1000)); 
  let hr = Math.floor((diferenca % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let min = Math.floor((diferenca % (60 * 60 * 1000)) / (60 * 1000));
  let sec = Math.floor((diferenca % (60 * 1000)) / 1000);

  if(diasSemana <10) diasSemana = '0' + diasSemana;
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  dias.textContent = diasSemana;
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
}, 1000);
