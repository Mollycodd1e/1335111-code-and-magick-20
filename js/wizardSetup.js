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

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoatSetup = wizardSetup.querySelector('.wizard-coat');
  var wizardEyesSetup = wizardSetup.querySelector('.wizard-eyes');
  var wizardFireballSetup = document.querySelector('.setup-fireball-wrap');
  var inputCoatColor = document.querySelector('input[name="coat-color"]');
  var inputEyesColor = document.querySelector('input[name="eyes-color"]');

  wizardCoatSetup.addEventListener('click', function () {
    wizardCoatSetup.style.fill = getRandomValue(COAT_COLOR);
    inputCoatColor.value = '' + wizardCoatSetup.style.fill;
    wizard.onCoatChange(wizardCoatSetup.style.fill);
  });

  wizardEyesSetup.addEventListener('click', function () {
    wizardEyesSetup.style.fill = getRandomValue(EYES_COLOR);
    inputEyesColor.value = '' + wizardEyesSetup.style.fill;
    wizard.onEyesChange(wizardEyesSetup.style.fill);
  });

  wizardFireballSetup.addEventListener('click', function () {
    wizardFireballSetup.style.backgroundColor = getRandomValue(FIREBALL_COLOR);
  });

  window.wizardSetup = {
    wizard: wizard
  };
})();
