
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
let amOrPm = document.getElementById('clockAmPm');

//estilo dos divs de acordo com a hora do dia
/* 
  MADRUGADA - linear-gradient(0deg,rgb(12, 10, 110), rgb(2, 1, 44))
  MANHÃ - linear-gradient(0deg,rgb(248, 255, 146) 30%, rgb(182, 249, 255))
  TARDE - linear-gradient(0deg,rgb(253, 102, 036)40%, rgb(47, 5, 82))
  NOITE - linear-gradient(0deg,rgb(86, 13, 104) 30%, rgb(4, 2, 39))
*/
//MADRUGADA
if (h === 1 || h < 6) {
  document.getElementById('lowerRow').style.background = "linear-gradient(0deg,rgb(12, 10, 110), rgb(2, 1, 44))"
  document.getElementById('lowerRow').style.color = "white"
  document.getElementById('userGreeting').innerHTML = 'Good Night!'
  document.getElementById('cuteMessage').innerHTML = 'You did good. Take a break!'
  document.getElementById('cuteMessage').style.color = "white"
}

//MANHÃ
else if (h <= 12) {
  document.getElementById('lowerRow').style.background = "linear-gradient(0deg,rgb(248, 255, 146) 30%, rgb(182, 249, 255))"
  document.getElementById('userGreeting').innerHTML = 'Good Morning!'
  document.getElementById('cuteMessage').innerHTML = 'Today is gonna be an awesome day!'
}

//TARDE
else if (h <= 18) {
  document.getElementById('lowerRow').style.background = "linear-gradient(0deg,rgb(253, 102, 036)40%, rgb(47, 5, 82))"
  document.getElementById('lowerRow').style.color = "white"
  document.getElementById('userGreeting').innerHTML = 'Good Evening!'
document.getElementById('cuteMessage').innerHTML = 'Just a little more and you can rest!'
document.getElementById('cuteMessage').style.color = "white"
}

//NOITE
else if (h <= 24) {
  document.getElementById('lowerRow').style.background = "linear-gradient(0deg,rgb(86, 13, 104) 30%, rgb(4, 2, 39))"
  document.getElementById('lowerRow').style.color = "white"
  document.getElementById('userGreeting').innerHTML = 'Good Night!'
  document.getElementById('cuteMessage').innerHTML = 'Tomorrow is gonna be even better!'
  document.getElementById('cuteMessage').style.color = "white"
}

//define se apareça PM ou AM ao lado do relógio && converte 24 para 12
if (h >= 12) {document.getElementById("clockAmPm").innerHTML = "PM";}
if (h > 12) {h -= 12}

// adiciona um zero em frente de números menores que 10
if (h < 10) {h = `0${h}`;}
if (m < 10) {m = `0${m}`;}
if (s < 10) {s = `0${s}`;}

//adiciona o relógio ao HTML
let currentTime = `${h}:${m}`;
document.getElementById("clock").innerHTML = currentTime;
document.getElementById("clockSeconds").innerHTML = s;

//atualiza a pagina
setTimeout(startTime, 1000);
}
