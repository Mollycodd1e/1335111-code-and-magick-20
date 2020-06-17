'use strict';

(function () {
  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoatSetup = wizardSetup.querySelector('.wizard-coat');
  var wizardEyesSetup = wizardSetup.querySelector('.wizard-eyes');
  var wizardFireballSetup = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');

  wizardCoatSetup.addEventListener('click', function () {
    wizardCoatSetup.style.fill = window.setup.getRandomValue(window.setup.COAT_COLOR);
    inputCoatColor.value = '' + wizardCoatSetup.style.fill;
  });

  wizardEyesSetup.addEventListener('click', function () {
    wizardEyesSetup.style.fill = window.setup.getRandomValue(window.setup.EYES_COLOR);
    inputEyesColor.value = '' + wizardEyesSetup.style.fill;
  });

  wizardFireballSetup.addEventListener('click', function () {
    wizardFireballSetup.style.backgroundColor = window.setup.getRandomValue(window.setup.FIREBALL_COLOR);
  });
})();
