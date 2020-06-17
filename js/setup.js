'use strict';

(function () {
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

  window.setup = {
    FIREBALL_COLOR: FIREBALL_COLOR,
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    getRandomValue: getRandomValue,
  };
})();
