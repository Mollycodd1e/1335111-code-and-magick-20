'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];

var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',
  'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

var magePlayers = [
  {
    name: getRandom(FIRST_NAME) + ' ' + getRandom(SECOND_NAME),
    coatColor: getRandom(COAT_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  },
  {
    name: getRandom(FIRST_NAME) + ' ' + getRandom(SECOND_NAME),
    coatColor: getRandom(COAT_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  },
  {
    name: getRandom(FIRST_NAME) + ' ' + getRandom(SECOND_NAME),
    coatColor: getRandom(COAT_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  },
  {
    name: getRandom(FIRST_NAME) + ' ' + getRandom(SECOND_NAME),
    coatColor: getRandom(COAT_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  }
];

console.log(magePlayers);
