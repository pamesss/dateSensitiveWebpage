function startTime() {
let date = new Date();

//variaveis para as informações do calendário
let userDay = date.getDate();
let userMonth = date.getMonth() + 1;
let userYear = date.getFullYear();

//convertendo a lista do mês para strings
switch (userMonth) {
  case 1:
    userMonth = "Janeiro";
    break;
  case 2:
    userMonth = "Fevereiro";
    break;
  case 3:
    userMonth = "Março";
    break;
  case 4:
    userMonth = "Abril";
    break;
  case 5:
    userMonth = "Maio";
    break;
  case 6:
    userMonth = "Junho";
    break;
  case 7:
    userMonth = "Julho";
    break;
  case 8:
    userMonth = "Agosto";
    break;
  case 9:
    userMonth = "Setembro";
    break;
  case 10:
    userMonth = "Outubro";
    break;
  case 11:
    userMonth = "Novembro";
    break;
  case 12:
    userMonth = "Dezembro";
    break;
}

//adiciona o calendário ao HTML
let currentDate = `${userDay} de ${userMonth}, ${userYear}`;
document.getElementById("userDate").innerHTML = currentDate;

//variaveis para o relógio
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

// adiciona um zero em frente de números menores que 10
if (m < 10) {
  m = `0${m}`;
}
if (s < 10) {
  s = `0${s}`;
}

let currentTime = `${h}:${m}`;
document.getElementById("clock").innerHTML = currentTime;
document.getElementById("clockSeconds").innerHTML = s;

//define se apareça PM ou AM ao lado do relógio
if (h > 12) {
  document.getElementById("clockAmPm").innerHTML = "PM";
} else {
  document.getElementById("clockAmPm").innerHTML = "AM";
}

//estilo dos divs de acordo com a hora do dia

setTimeout(startTime, 1000);
}
