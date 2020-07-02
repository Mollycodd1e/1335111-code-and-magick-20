'use strict';

(function () {
  var currentCoatColor = 'rgb(101, 137, 164)';
  var currentEyesColor = 'black';

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var wizards = [];

  window.wizardSetup.wizard.onEyesChange = window.debounce(function (color) {
    currentEyesColor = color;
    updateSameWizards();
  });

  window.wizardSetup.wizard.onCoatChange = window.debounce(function (color) {
    currentCoatColor = color;
    updateSameWizards();
  });

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === currentCoatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === currentEyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateSameWizards = function () {
    window.render.render(wizards.sort(function (left, rigth) {
      var rankDiff = getRank(rigth) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, rigth.name);
      }

      return rankDiff;
    }));
  };

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
})();
