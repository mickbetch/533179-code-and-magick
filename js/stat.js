'use strict';
// Глобальные переменные
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
var COLUMN_HEIGHT = GIST_HEIGHT + (TEXT_HEIGHT * 2);
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = '#000';
var FONT_HEIGHT = '16px PT Mono';

// Функция отрисовки модального окна и тени модального окна
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция получения максимального значения элемента в массиве
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Функция создания заголовков модального окна
var titles = ['Ура вы победили!', 'Список результатов:'];

var renderStatisticTitle = function (ctx, titles) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.textBaseline = 'hanging';
  ctx.font = FONT_HEIGHT;
  for (var i = 0; i < titles.length; i++) {
    ctx.fillText(titles[i], CLOUD_X + GAP, CLOUD_Y + GAP + (TEXT_HEIGHT + LINE_HEIGHT) * i);
  }
};

// Функция создания гистограммы
var renderStatisticGistogram = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, PLAYERS_Y);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y + (COLUMN_HEIGHT * times[i]) / maxTime - TEXT_HEIGHT - LINE_HEIGHT);
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0) + 0) + ')';
    }
    ctx.fillRect(CLOUD_X + COLUMN_WIDTH + (COLUMN_WIDTH + COLUMN_DISTANCE) * i, COLUMN_Y, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
  }
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  renderStatisticTitle(ctx, titles);

  renderStatisticGistogram(ctx, names, times);
};
