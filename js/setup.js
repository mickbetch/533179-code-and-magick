'use strict';
// Чтобы показать блок .setup убираем у него класс hidden.
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// Создаем массивы с именами, фамилиями, цветами мантий и глаз.
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

// Функция создания случайного числа
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Функция создания случайного элемента массива
var getRandomArrayElement = function (arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
};

var wizards = [
  {
    name: getRandomArrayElement(NAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  },
  {
    name: getRandomArrayElement(NAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  },
  {
    name: getRandomArrayElement(NAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  },
  {
    name: getRandomArrayElement(NAMES),
    coatColor: getRandomArrayElement(COAT_COLORS),
    eyesColor: getRandomArrayElement(EYES_COLORS)
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// Чтобы отразить блок setup-similar с другими волшебниками убираю у него класс hidden
document.querySelector('.setup-similar').classList.remove('hidden');
