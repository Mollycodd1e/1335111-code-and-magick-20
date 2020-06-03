'use strict';

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

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var magePlayers = [];

for (var i = 0; i < 4; i++) {
  var object = {
    name: getRandom(FIRST_NAME) + ' ' + getRandom(SECOND_NAME),
    coatColor: getRandom(COAT_COLOR),
    eyesColor: getRandom(EYES_COLOR)
  };
  magePlayers.push(object);
}

var renderWizard = function (magePlayers) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = magePlayers.name;
  wizardElement.querySelector('.wizard-coat').style.fill = magePlayers.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = magePlayers.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < magePlayers.length; j++) {
  fragment.appendChild(renderWizard(magePlayers[j]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
