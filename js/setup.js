'use strict';

(function () {
  //  var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  //  'Юлия', 'Люпита', 'Вашингтон'];

  //  var SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',
  //  'Нионго', 'Ирвинг'];

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

  /*
    wizards = [];

    var createWizard = function (wizards) {
    for (var i = 0; i < count; i++) {
      wizards.push({
        name: getRandomValue(FIRST_NAME) + ' ' + getRandomValue(SECOND_NAME),
        coatColor: getRandomValue(COAT_COLOR),
        eyesColor: getRandomValue(EYES_COLOR)
      });
    }
    return wizards;
  };

  createWizard(MAGE_COUNT); */

  var renderWizard = function (wizards) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards.colorEyes;

    return wizardElement;
  };

  var loadSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAGE_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  var showError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(loadSuccess, showError);

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

  window.setup = {
    FIREBALL_COLOR: FIREBALL_COLOR,
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    getRandomValue: getRandomValue,
  };
})();
