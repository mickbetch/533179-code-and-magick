'use strict';

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

var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');

var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_COUNT = 4;

var ESC_KEYCODE = 27;

var ENTER_KEYCODE = 13;

// Функция создания случайного числа
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Функция создания случайного элемента массива
var getRandomArrayElement = function (arr) {
  return arr[getRandomNumber(0, arr.length - 1)];
};

var createArrayOfWizards = function (count) {
  var wizards = [];
  var wizard;
  for (var i = 0; i < count; i++) {
    wizard = {
      name: getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(SUR_NAMES),
      coatColor: getRandomArrayElement(COAT_COLORS),
      eyesColor: getRandomArrayElement(EYES_COLORS)
    };
    wizards.push(wizard);
  }
  return wizards;
};

var WIZARDS = createArrayOfWizards(WIZARDS_COUNT);

var renderWizard = function (wizard) {
  var wizardElement = SIMILAR_WIZARD_TEMPLATE.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
var renderWizards = function () {
  var wirardFragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS.length; i++) {
    wirardFragment.appendChild(renderWizard(WIZARDS[i]));
  }
  return wirardFragment;
};

SIMILAR_LIST_ELEMENT.appendChild(renderWizards());

// Переменные для открытия и закрытия окна выбора персонажа
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var WIZARDS_COATCOLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARDS_EYESCOLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var setupWizardEye = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

setupWizardCoat.addEventListener('click', function () {
  var randomCoatColor = getRandomArrayElement(WIZARDS_COATCOLORS);
  setupWizardCoat.style = 'fill: ' + randomCoatColor + ';';
  setup.querySelector('.coat-color').value = randomCoatColor;
});

setupWizardEye.addEventListener('click', function () {
  var randomEyesColor = getRandomArrayElement(WIZARDS_EYESCOLORS);
  setupWizardEye.style = 'fill: ' + randomEyesColor + ';';
  setup.querySelector('.eyes-color').value = randomEyesColor;
});

setupFireball.addEventListener('click', function () {
  var randomFireballColor = getRandomArrayElement(FIREBALL_COLORS);
  setupFireball.style = 'background-color: ' + randomFireballColor + ';';
  setup.querySelector('.fireball-color').value = randomFireballColor;
});

