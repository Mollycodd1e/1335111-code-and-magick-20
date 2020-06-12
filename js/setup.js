'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];

var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',
  'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var MAGE_COUNT = 4;

var getRandomValue = function (arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [];

var createWizard = function (count) {
  for (var i = 0; i < count; i++) {
    wizards.push({
      name: getRandomValue(FIRST_NAME) + ' ' + getRandomValue(SECOND_NAME),
      coatColor: getRandomValue(COAT_COLOR),
      eyesColor: getRandomValue(EYES_COLOR)
    });
  }
  return wizards;
};

createWizard(MAGE_COUNT);

var renderWizard = function (mageArray) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = mageArray.name;
  wizardElement.querySelector('.wizard-coat').style.fill = mageArray.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = mageArray.eyesColor;

  return wizardElement;
};

renderWizard(wizards);

var renderWizards = function (count) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(MAGE_COUNT);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

var wizardSetup = document.querySelector('.setup-wizard');
var wizardCoatSetup = wizardSetup.querySelector('.wizard-coat');
var wizardEyesSetup = wizardSetup.querySelector('.wizard-eyes');
var wizardFireballSetup = document.querySelector('.setup-fireball-wrap');
var inputCoatColor = document.querySelector('input[name="coat-color"]');
var inputEyesColor = document.querySelector('input[name="eyes-color"]');

wizardCoatSetup.addEventListener('click', function () {
  wizardCoatSetup.style.fill = getRandomValue(COAT_COLOR);
  inputCoatColor.value = '' + wizardCoatSetup.style.fill;
});

wizardEyesSetup.addEventListener('click', function () {
  wizardEyesSetup.style.fill = getRandomValue(EYES_COLOR);
  inputEyesColor.value = '' + wizardEyesSetup.style.fill;
});

wizardFireballSetup.addEventListener('click', function () {
  wizardFireballSetup.style.backgroundColor = getRandomValue(FIREBALL_COLOR);
});