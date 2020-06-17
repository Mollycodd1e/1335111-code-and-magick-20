'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var TEXT_GAP = 30;
  var STAT_GAP = 40;
  var GAP = 10;
  var TEXT_HEIGHT = 20;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = -(CLOUD_HEIGHT - TEXT_GAP - (TEXT_HEIGHT * 3) - (STAT_GAP / 2) - GAP);

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    if (arr.length > 0) {
      var maxElement = arr[0];

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    }
    return maxElement;
  };

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '500 16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, TEXT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, TEXT_GAP + TEXT_HEIGHT);

    var maxTime = getMaxElement(times);

    players.forEach(function (value, i) {
      ctx.fillStyle = '#000000';
      ctx.fillText(value, CLOUD_X + STAT_GAP + ((50 + BAR_WIDTH) * i), CLOUD_HEIGHT - (STAT_GAP / 2));

      ctx.fillStyle = 'hsl(255,' + getRandomInt(10, 100) + '%, 25%)';
      ctx.fillRect(CLOUD_X + STAT_GAP + ((50 + BAR_WIDTH) * i), CLOUD_Y - BAR_HEIGHT + (2 * TEXT_HEIGHT) + TEXT_GAP + GAP,
          BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);

      if (value === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(CLOUD_X + STAT_GAP + ((50 + BAR_WIDTH) * i), CLOUD_Y - BAR_HEIGHT + (2 * TEXT_HEIGHT) + TEXT_GAP + GAP,
            BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      }

      ctx.fillStyle = '#000000';
      ctx.fillText(Math.round(times[i]), CLOUD_X + STAT_GAP + ((50 + BAR_WIDTH) * i),
          CLOUD_HEIGHT - (STAT_GAP / 2) + (BAR_HEIGHT * times[i]) / maxTime - (TEXT_HEIGHT) - GAP);
    });
  };
})();
