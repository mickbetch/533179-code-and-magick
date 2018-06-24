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

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var SIMILAR_LIST_ELEMENT = document.querySelector('.setup-similar-list');

var SIMILAR_WIZARD_TEMPLATE = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_COUNT = 4;

var ESC_KEYCODE = 27;

var ENTER_KEYCODE = 13;

// Переменные для открытия и закрытия окна выбора персонажа
var SETUP_OPEN = document.querySelector('.setup-open');

var SETUP = document.querySelector('.setup');

var SETUP_CLOSE = SETUP.querySelector('.setup-close');

var USER_NAME_INPUT = SETUP.querySelector('.setup-user-name');

var SETUP_WIZARD_COAT = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var SETUP_WIZARD_EYE = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var SETUP_FIREBALL = document.querySelector('.setup-fireball-wrap');

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

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && USER_NAME_INPUT !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  SETUP.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  SETUP.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onUserNameInvalid = function (evt) {
  if (evt.target.validity.tooShort) {
    evt.target.setCustomValidity('Поле должно содержать минимум 2 символа');
  } else if (evt.target.validity.tooLong) {
    evt.target.setCustomValidity('Поле должно содержать не более 25 символов');
  } else {
    evt.target.setCustomValidity('');
  }
};

var onUserNameInput = function (evt) {
  if (evt.target.value.length < 2) {
    evt.target.setCustomValidity('Поле должно содержать минимум 2 символа');
  } else {
    evt.target.setCustomValidity('');
  }
};

SETUP_OPEN.addEventListener('click', openPopup);

SETUP_OPEN.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

SETUP_CLOSE.addEventListener('click', closePopup);

SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

SETUP_WIZARD_COAT.addEventListener('click', function (evt) {
  var randomCoatColor = getRandomArrayElement(COAT_COLORS);
  evt.target.style = 'fill: ' + randomCoatColor + ';';
  SETUP.querySelector('.coat-color').value = randomCoatColor;
});

SETUP_WIZARD_EYE.addEventListener('click', function (evt) {
  var randomEyesColor = getRandomArrayElement(WIZARDS_EYESCOLORS);
  evt.target.style = 'fill: ' + randomEyesColor + ';';
  SETUP.querySelector('.eyes-color').value = randomEyesColor;
});

SETUP_FIREBALL.addEventListener('click', function (evt) {
  var randomFireballColor = getRandomArrayElement(FIREBALL_COLORS);
  evt.target.style = 'background-color: ' + randomFireballColor + ';';
  SETUP.querySelector('.fireball-color').value = randomFireballColor;
});

USER_NAME_INPUT.addEventListener('invalid', onUserNameInvalid);
USER_NAME_INPUT.addEventListener('input', onUserNameInput);
