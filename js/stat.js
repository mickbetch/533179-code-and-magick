'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var TEXT_HEIGHT = 16;
var LINE_HEIGHT = 9;
var COLUMN_WIDTH = 40;
var COLUMN_DISTANCE = 50;
var COLUMN_Y = CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGHT - LINE_HEIGHT;
var PLAYERS_Y = CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGHT;
var GIST_HEIGHT = -150;
var columnHeight = GIST_HEIGHT + (TEXT_HEIGHT * 2);

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

/*
var getColorColumn = function (color) {
  if (color[i] == 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, 1';
  }
  return ctx.fillStyle;
};
*/

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT + LINE_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, PLAYERS_Y);
    ctx.fillRect(CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y, COLUMN_WIDTH, (columnHeight * times[i]) / maxTime);
    // getColorColumn(names); не знаю каким образом менять цвета колонок
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y + (columnHeight * times[i]) / maxTime - TEXT_HEIGHT - LINE_HEIGHT);
  }
};
