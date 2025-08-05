const element1Elem = document.querySelector(".element1");
const element2Elem = document.querySelector(".element2");
const element3Elem = document.querySelector(".element3");
const element4Elem = document.querySelector(".element4");
const element5Elem = document.querySelector(".element5");
const element6Elem = document.querySelector(".element6");
const element7Elem = document.querySelector(".element7");
const element8Elem = document.querySelector(".element8");
const element9Elem = document.querySelector(".element9");
const element10Elem = document.querySelector(".element10");

const operator1Elem = document.querySelector(".operator1");
const operator2Elem = document.querySelector(".operator2");
const operator3Elem = document.querySelector(".operator3");
const operator4Elem = document.querySelector(".operator4");
const operator5Elem = document.querySelector(".operator5");

let z_1 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_2 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_3 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_4 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_5 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_6 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_7 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_8 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_9 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
let z_10 = Number(Math.floor(Math.random(1, 11) * 10 + 1));

while (z_1 < z_2) {
  z_2 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
}

while (z_3 < z_4) {
  z_4 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
}

while (z_5 < z_6) {
  z_6 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
}

while (z_7 < z_8) {
  z_8 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
}

while (z_9 < z_10) {
  z_10 = Number(Math.floor(Math.random(1, 11) * 10 + 1));
}

element1Elem.textContent = `${z_1}`;
element2Elem.textContent = `${z_2}`;
element3Elem.textContent = `${z_3}`;
element4Elem.textContent = `${z_4}`;
element5Elem.textContent = `${z_5}`;
element6Elem.textContent = `${z_6}`;
element7Elem.textContent = `${z_7}`;
element8Elem.textContent = `${z_8}`;
element9Elem.textContent = `${z_9}`;
element10Elem.textContent = `${z_10}`;

let operator_1;
let x1 = Math.floor(Math.random(0, 10) * 10);
if (x1 % 2 != 0) {
  operator_1 = "+";
} else if (x1 % 2 == 0) {
  operator_1 = "-";
}

operator1Elem.innerHTML = `${operator_1}`;

let operator_2;
let x2 = Math.floor(Math.random(0, 10) * 10);
if (x2 % 2 != 0) {
  operator_2 = "+";
} else if (x2 % 2 == 0) {
  operator_2 = "-";
}

operator2Elem.innerHTML = `${operator_2}`;

let operator_3;
let x3 = Math.floor(Math.random(0, 10) * 10);
if (x3 % 2 != 0) {
  operator_3 = "+";
} else if (x3 % 2 == 0) {
  operator_3 = "-";
}

operator3Elem.innerHTML = `${operator_3}`;

let operator_4;
let x4 = Math.floor(Math.random(0, 10) * 10);
if (x4 % 2 != 0) {
  operator_4 = "+";
} else if (x4 % 2 == 0) {
  operator_4 = "-";
}

operator4Elem.innerHTML = `${operator_4}`;

let operator_5;
let x5 = Math.floor(Math.random(0, 10) * 10);
if (x5 % 2 != 0) {
  operator_5 = "+";
} else if (x5 % 2 == 0) {
  operator_5 = "-";
}

operator5Elem.innerHTML = `${operator_5}`;

let answers1Elem = document.querySelector(".answers1");
let answers2Elem = document.querySelector(".answers2");
let answers3Elem = document.querySelector(".answers3");
let answers4Elem = document.querySelector(".answers4");
let answers5Elem = document.querySelector(".answers5");

let ans1El = document.querySelector(".ans1");
let ans2El = document.querySelector(".ans2");
let ans3El = document.querySelector(".ans3");
let ans4El = document.querySelector(".ans4");
let ans5El = document.querySelector(".ans5");

/* -- КНОПКА "ПРОВЕРИТЬ" -- */
const exampleReload__buttonnControlElem = document.querySelector(
  ".exampleReload__buttonnControl"
);
/* ------------------------ */

const result_1Elem = document.getElementById("result_1");
const result_2Elem = document.getElementById("result_2");
const result_3Elem = document.getElementById("result_3");
const result_4Elem = document.getElementById("result_4");
const result_5Elem = document.getElementById("result_5");

const contrTotal1Elem = document.querySelector(".contrTotal1");
const contrTotal2Elem = document.querySelector(".contrTotal2");
const contrTotal3Elem = document.querySelector(".contrTotal3");
const contrTotal4Elem = document.querySelector(".contrTotal4");
const contrTotal5Elem = document.querySelector(".contrTotal5");

const resultEstimationElem = document.querySelector(".resultEstimation");

let counter_1;
let counter_2;
let counter_3;
let counter_4;
let counter_5;
let counterSum;

/* -- КЛИК ПО КНОПКЕ "ПРОВЕРИТЬ" -- */
function returnResult() {
  if (operator_1 == "+") {
    ans1El.textContent = "Правильный ответ: ";
    answers1Elem.innerHTML = `${z_1 + z_2}`;
  } else if (operator_1 == "-") {
    ans1El.textContent = "Правильный ответ: ";
    answers1Elem.innerHTML = `${z_1 - z_2}`;
  }

  if (operator_2 == "+") {
    ans2El.textContent = "Правильный ответ: ";
    answers2Elem.innerHTML = `${z_3 + z_4}`;
  } else if (operator_2 == "-") {
    ans2El.textContent = "Правильный ответ: ";
    answers2Elem.innerHTML = `${z_3 - z_4}`;
  }

  if (operator_3 == "+") {
    ans3El.textContent = "Правильный ответ: ";
    answers3Elem.innerHTML = `${z_5 + z_6}`;
  } else if (operator_3 == "-") {
    ans3El.textContent = "Правильный ответ: ";
    answers3Elem.innerHTML = `${z_5 - z_6}`;
  }

  if (operator_4 == "+") {
    ans4El.textContent = "Правильный ответ: ";
    answers4Elem.innerHTML = `${z_7 + z_8}`;
  } else if (operator_4 == "-") {
    ans4El.textContent = "Правильный ответ: ";
    answers4Elem.innerHTML = `${z_7 - z_8}`;
  }

  if (operator_5 == "+") {
    ans5El.textContent = "Правильный ответ: ";
    answers5Elem.innerHTML = `${z_9 + z_10}`;
  } else if (operator_5 == "-") {
    ans5El.textContent = "Правильный ответ: ";
    answers5Elem.innerHTML = `${z_9 - z_10}`;
  }

  if (result_1Elem.value == answers1Elem.innerHTML) {
    contrTotal1Elem.innerHTML = "&#10004;";
    contrTotal1Elem.style =
      "background: rgba(50,255,50,0.2); color: rgb(0,180,0)";
    counter_1 = 1;
  } else if (result_1Elem.value != answers1Elem.innerHTML) {
    contrTotal1Elem.innerHTML = "&#10006;";
    contrTotal1Elem.style = "background: rgba(255,50,50,0.2)";
    counter_1 = 0;
  }

  if (result_2Elem.value == answers2Elem.innerHTML) {
    contrTotal2Elem.innerHTML = "&#10004;";
    contrTotal2Elem.style =
      "background: rgba(50,255,50,0.2); color: rgb(0,180,0)";
    counter_2 = 1;
  } else if (result_2Elem.value != answers2Elem.innerHTML) {
    contrTotal2Elem.innerHTML = "&#10006;";
    contrTotal2Elem.style = "background: rgba(255,50,50,0.2)";
    counter_2 = 0;
  }

  if (result_3Elem.value == answers3Elem.innerHTML) {
    contrTotal3Elem.innerHTML = "&#10004;";
    contrTotal3Elem.style =
      "background: rgba(50,255,50,0.2); color: rgb(0,180,0)";
    counter_3 = 1;
  } else if (result_3Elem.value != answers3Elem.innerHTML) {
    contrTotal3Elem.innerHTML = "&#10006;";
    contrTotal3Elem.style = "background: rgba(255,50,50,0.2)";
    counter_3 = 0;
  }

  if (result_4Elem.value == answers4Elem.innerHTML) {
    contrTotal4Elem.innerHTML = "&#10004;";
    contrTotal4Elem.style =
      "background: rgba(50,255,50,0.2); color: rgb(0,180,0)";
    counter_4 = 1;
  } else if (result_4Elem.value != answers4Elem.innerHTML) {
    contrTotal4Elem.innerHTML = "&#10006;";
    contrTotal4Elem.style = "background: rgba(255,50,50,0.2)";
    counter_4 = 0;
  }

  if (result_5Elem.value == answers5Elem.innerHTML) {
    contrTotal5Elem.innerHTML = "&#10004;";
    contrTotal5Elem.style =
      "background: rgba(50,255,50,0.2); color: rgb(0,180,0)";
    counter_5 = 1;
  } else if (result_5Elem.value != answers5Elem.innerHTML) {
    contrTotal5Elem.innerHTML = "&#10006;";
    contrTotal5Elem.style = "background: rgba(255,50,50,0.2)";
    counter_5 = 0;
  }

  counterSum = counter_1 + counter_2 + counter_3 + counter_4 + counter_5;
  if (counterSum == 5) {
    resultEstimationElem.innerHTML =
      "Твоя оценка: <b>5</b> (<b>Пятёрка</b>)!<br>Ты - <b>МОЛОДЕЦ</b>!";
  } else if (counterSum == 4) {
    resultEstimationElem.innerHTML =
      'Твоя оценка: <b>4</b> (<b>Хорошо</b>)!<br>У тебя получилось, но если постараешься и ответишь на "<b>5</b>", то станешь <b>МОЛОДЦОМ</b>!';
  } else if (counterSum == 3) {
    resultEstimationElem.innerHTML =
      "Твоя оценка: <b>3</b> (<b>Удовлетворительно</b>)!<br>Тебе надо внимательнее подходить к решению примеров, и у тебя всё получится!";
  } else if (counterSum == 2) {
    resultEstimationElem.innerHTML =
      "Твоя оценка: <b>2</b> (<b>Неудовлетворительно</b>)!<br>Это - не твоя оценка!<br>Я знаю, что ты можешь гораздо <b>лучше решать такие примеры</b>!<br><b>ТРЕНИРУЙСЯ</b>!";
  } else if (counterSum == 1) {
    resultEstimationElem.innerHTML =
      "Твоя оценка: <b>1</b> (<b>Кол</b>)!<br>Отнесись к этому спокойно!<br>У любого может не получиться...<br>Главное: надо <b>НЕ СПЕШИТЬ</b>, <b>БЫТЬ ВНИМАТЕЛЬНЫМ</b> и стараться <b>НЕ ДОПУСКАТЬ ОШИБОК</b>!";
  } else if (counterSum == 0) {
    resultEstimationElem.innerHTML =
      "Сейчас у меня нет оценки для тебя!<br>Но ты можешь повторить правила сложения и вычитания, а потом снова решать примеры!<br>Я знаю: у тебя <b>ПОЛУЧИТСЯ</b>!<br>Когда стараешься - <b>ВСЕГДА ПОЛУЧАЕТСЯ</b>!";
  }
}
/* -------------------------------- */
