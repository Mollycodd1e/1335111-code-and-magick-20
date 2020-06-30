'use strict';

(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
    'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomValue = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');


    var wizardSetup = document.querySelector('.setup-wizard');
    var wizardCoatSetup = wizardSetup.querySelector('.wizard-coat');
    var wizardEyesSetup = wizardSetup.querySelector('.wizard-eyes');
    var wizardFireballSetup = document.querySelector('.setup-fireball-wrap');
    var inputCoatColor = document.querySelector('input[name="coat-color"]');
    var inputEyesColor = document.querySelector('input[name="eyes-color"]');
    var currentCoatColor = 'rgb(101, 137, 164)';
    var currentEyesColor = 'black';

    wizardCoatSetup.addEventListener('click', function () {
      wizardCoatSetup.style.fill = getRandomValue(COAT_COLOR);
      inputCoatColor.value = '' + wizardCoatSetup.style.fill;
      currentCoatColor = wizardCoatSetup.style.fill;
      updateSameWizards();
    });

    wizardEyesSetup.addEventListener('click', function () {
      wizardEyesSetup.style.fill = getRandomValue(EYES_COLOR);
      inputEyesColor.value = '' + wizardEyesSetup.style.fill;
      currentEyesColor = wizardEyesSetup.style.fill;
      updateSameWizards();
    });

    wizardFireballSetup.addEventListener('click', function () {
      wizardFireballSetup.style.backgroundColor = getRandomValue(FIREBALL_COLOR);
    });

  var wizards = [];

  var updateSameWizards = function () {

    var sameCoatWizards = wizards.filter(function(it) {
      return it.colorCoat === currentCoatColor;
    });

    var sameEyesWizards = wizards.filter(function(it) {
      return it.colorEyes === currentEyesColor;
    });

    window.render.render(sameCoatWizards.concat(sameEyesWizards).concat(wizards));
  }

  var loadSuccess = function (data) {
    wizards = data;
    updateSameWizards();
  };

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.backend.load(loadSuccess, window.backend.showError);

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
