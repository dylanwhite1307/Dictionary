// TRANSLATE

let translate = document.getElementsByClassName("translate");
let element = document.getElementsByClassName("russian-text__item");

translate[0].onclick = function () {
  element[0].classList.toggle("active");
};

let transFoo = translate[0].onclick;


// GETTING WORDS

if (window.localStorage) {
  let elements = document.querySelectorAll("[name]");
  for (let i = 0, length = elements.length; i < length; i++) {
    (function (element) {
      let name = element.getAttribute("name");

      element.value = localStorage.getItem(name) || "";

      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}

let keyLocal = localStorage.getItem('textForTranslate').replace(/\s+/g, ' ').trim().split(',').filter(element => element !== '' && element !== ' ');

for (let i = 0; i < keyLocal.length; i++) {
  if (keyLocal[i][0] == ' ') {
    keyLocal[i] = String(keyLocal[i].replace(' ', ''));
  }
}

console.log(keyLocal);

let arrEng = [];
let arrRus = [];

for (let i = 0; i < keyLocal.length; i++) {
  if (i % 2 == 0) {
    arrEng.push(keyLocal[i]);
  } else {
    arrRus.push(keyLocal[i]);
  }
}

console.log(arrEng);
console.log(arrRus);


// RANDOM WORDS
function shuffleArray(array, array2) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    let temp2 = array2[i];
    array2[i] = array2[j];
    array2[j] = temp2;
  }
}

shuffleArray(arrEng, arrRus);

console.log(arrEng); // убрать
console.log(arrRus); // убрать



// NEXT

let next = document.getElementsByClassName("next");
let replDivEng = document.getElementById("english-text__item");
let replDivRus = document.getElementById("russian-text__item");
let index = 0;

let colDict = document.getElementsByClassName("dictionary");

next[0].onclick = function () {
  element[0].classList.remove("active");
  textarea[0].classList.add("active");
  colDict[0].classList.remove("active");
  repeat[0].onclick = repeatFoo;
  if (index < arrEng.length) {
    replDivEng.innerHTML = arrEng[index];
    console.log(arrEng[index]);
    replDivRus.innerHTML = arrRus[index];
    console.log(arrRus[index]);
    index++;
  } else if (arrRepEng[indexArr].length == 0){
    translate[0].onclick = false;
    colDict[0].classList.add("active");
    element[0].classList.add("active");
    replDivEng.innerHTML = "The End";
    replDivRus.innerHTML = "Конец";
  } else if (index == arrEng.length) {
    translate[0].onclick = false;
    colDict[0].classList.add("active");
    element[0].classList.add("active");
    replDivEng.innerHTML = `REPEAT`;
    replDivRus.innerHTML = `ПОВТОР `;
    index++;
  } else if (indexRepeat < arrRepEng[indexArr].length) {
    translate[0].onclick = transFoo;
    colDict[0].classList.remove("active");
    replDivEng.innerHTML = arrRepEng[indexArr][indexRepeat];
    replDivRus.innerHTML = arrRepRus[indexArr][indexRepeat];
    indexRepeat++;
  } else if (arrRepEng[indexArr + 1].length == 0){
    translate[0].onclick = false;
    colDict[0].classList.add("active");
    element[0].classList.add("active");
    replDivEng.innerHTML = "The End";
    replDivRus.innerHTML = "Конец";
  } else if (indexRepeat == arrRepEng[indexArr].length && arrRepEng[indexArr].length != 0) {
    translate[0].onclick = false;
    colDict[0].classList.add("active");
    element[0].classList.add("active");
    replDivEng.innerHTML = `REPEAT`;
    replDivRus.innerHTML = `ПОВТОР `;
    indexArr++;
    arrRepEng.push([]);
    arrRepRus.push([]);
    indexRepeat = 0;
  } else {
    translate[0].onclick = false;
    colDict[0].classList.add("active");
    element[0].classList.add("active");
    replDivEng.innerHTML = "The End";
    replDivRus.innerHTML = "Конец";
  }
};

//SEND
let textarea = document.getElementsByClassName("instruction-items-form__textarea");

// CHANGE
let changeButton = document.getElementsByClassName("button__change");
let isChangeButton = false;
changeButton[0].onclick = function () {
  textarea[0].classList.toggle('change');
  if(isChangeButton == false){
  replDivEng = document.getElementById("russian-text__item");
  replDivRus = document.getElementById("english-text__item");
  isChangeButton = true;
  } else{
    replDivEng = document.getElementById("english-text__item");
    replDivRus = document.getElementById("russian-text__item");
    isChangeButton = false;
  }
}



//REPEAT

let repeat = document.getElementsByClassName("repeat");
let arrRepEng = [
  [],
  []
];
let arrRepRus = [
  [],
  []
];
let indexArr = 0;
let indexRepeat = 0;
let repeatFoo = function () {
  colDict[0].classList.add("active");
  repeat[0].onclick = false;
  if (index != 0 && index <= arrEng.length) {
    arrRepEng[indexArr].push(arrEng[index - 1]);
    console.log(arrRepEng[indexArr]);
    arrRepRus[indexArr].push(arrRus[index - 1]);
    console.log(arrRepRus[indexArr]);
  } else if (indexRepeat != 0) {
    arrRepEng[indexArr + 1].push(arrRepEng[indexArr][indexRepeat - 1]);
    console.log(arrRepEng[indexArr + 1]);
    arrRepRus[indexArr + 1].push(arrRepRus[indexArr][indexRepeat - 1]);
    console.log(arrRepRus[indexArr + 1]);
  }
};
repeat[0].onclick = repeatFoo;