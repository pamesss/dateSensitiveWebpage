function startTime() {
let date = new Date();

//variaveis para as informações do calendário
let userDay = date.getDate();
let userMonth = date.getMonth() + 1;
let userYear = date.getFullYear();

//convertendo a lista do mês para strings
switch (userMonth) {
  case 1:
    userMonth = "January";
    break;
  case 2:
    userMonth = "February";
    break;
  case 3:
    userMonth = "March";
    break;
  case 4:
    userMonth = "April";
    break;
  case 5:
    userMonth = "May";
    break;
  case 6:
    userMonth = "June";
    break;
  case 7:
    userMonth = "July";
    break;
  case 8:
    userMonth = "August";
    break;
  case 9:
    userMonth = "September";
    break;
  case 10:
    userMonth = "October";
    break;
  case 11:
    userMonth = "November";
    break;
  case 12:
    userMonth = "December";
    break;
}

//adiciona o calendário ao HTML
let currentDate = `${userMonth} ${userDay}, ${userYear}`;
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
