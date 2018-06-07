'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SUR_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (numbers) {
  Math.floor(Math.random() * (numbers.length - numbers[0]) - numbers[0]);
};

var wizards = [
  {
    name: getRandomNumber(NAMES) + getRandomNumber(SUR_NAMES),
    coatColor: getRandomNumber(COAT_COLORS),
    eyesColor: getRandomNumber(EYES_COLORS)
  },
  {
    name: getRandomNumber(NAMES) + getRandomNumber(SUR_NAMES),
    coatColor: getRandomNumber(COAT_COLORS),
    eyesColor: getRandomNumber(EYES_COLORS)
  },
  {
    name: getRandomNumber(NAMES) + getRandomNumber(SUR_NAMES),
    coatColor: getRandomNumber(COAT_COLORS),
    eyesColor: getRandomNumber(EYES_COLORS)
  },
  {
    name: getRandomNumber(NAMES) + getRandomNumber(SUR_NAMES),
    coatColor: getRandomNumber(COAT_COLORS),
    eyesColor: getRandomNumber(EYES_COLORS)
  }
];

