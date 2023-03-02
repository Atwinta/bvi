/*!
  * Button visually impaired - v1.0.0 https://bvi.isvek.ru
  * Copyright 2014-2023 Oleg Korotenko <bvi@isvek.ru>.
  * Licensed MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('regenerator-runtime/runtime')) :
  typeof define === 'function' && define.amd ? define(['regenerator-runtime/runtime'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.isvek = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): util/index.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */

  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('prepend')) {
        return;
      }
      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }
  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var isElement = function isElement(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }
    return typeof obj.nodeType !== 'undefined';
  };
  var checkConfig = function checkConfig(config, configTypes, configOptions) {
    Object.keys(configTypes).forEach(function (key) {
      var expectedTypes = configTypes[key];
      var value = config[key];
      var valueType = value && isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("Bvi console: \u041E\u043F\u0446\u0438\u044F \"".concat(key, "\" \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u043F \"").concat(valueType, "\", \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u0442\u0438\u043F \"").concat(expectedTypes, "\"."));
      }
    });
    Object.keys(configOptions).forEach(function (key) {
      var expectedOptions = configOptions[key];
      var value = config[key];
      if (!new RegExp(expectedOptions).test(value)) {
        throw new TypeError("Bvi console: \u041E\u043F\u0446\u0438\u044F \"".concat(key, "\" \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \"").concat(value, "\", \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \"").concat(expectedOptions, "\"."));
      }
    });
  };
  var stringToBoolean = function stringToBoolean(string) {
    switch (string) {
      case 'on':
      case 'true':
      case '1':
        return true;
      default:
        return false;
    }
  };
  var wrapInner = function wrapInner(parent, wrapper, className) {
    if (typeof wrapper === 'string') {
      wrapper = document.createElement(wrapper);
    }
    parent.appendChild(wrapper).className = className;
    while (parent.firstChild !== wrapper) {
      wrapper.appendChild(parent.firstChild);
    }
  };
  var unwrap = function unwrap(wrapper) {
    var docFrag = document.createDocumentFragment();
    if (!wrapper) return;
    while (wrapper.firstChild) {
      var child = wrapper.removeChild(wrapper.firstChild);
      docFrag.appendChild(child);
    }
    wrapper.parentNode.replaceChild(docFrag, wrapper);
  };
  var getObject = function getObject(object, callback) {
    Object.keys(object).forEach(function (key) {
      if (typeof callback === 'function') {
        callback(key);
      }
    });
  };
  var getArray = function getArray(array, callback) {
    Array.from(array).forEach(function (key) {
      if (typeof callback === 'function') {
        callback(key);
      }
    });
  };
  var synth = function synth() {
    return window.speechSynthesis;
  };

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): util/cookie.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */

  var setCookie = function setCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var now = new Date();
    var time = now.getTime();
    time += 24 * 60 * 60 * 1000;
    now.setTime(time);
    document.cookie = "bvi_".concat(name, "=").concat(value, ";path=/;expires=").concat(now.toUTCString(), ";domain=").concat(location.hostname);
  };
  var getCookie = function getCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    name = "bvi_".concat(name, "=");
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name) !== -1) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  };
  var removeCookie = function removeCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    document.cookie = "bvi_".concat(name, "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=").concat(location.hostname);
  };

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): i18n.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */

  var lang = {
    'ru-RU': {
      'text': {
        'fontSize': 'Размер шрифта',
        'siteColors': 'Цвета сайта',
        'images': 'Изображения',
        'speech': 'Синтез речи',
        'settings': 'Настройки',
        'regularVersionOfTheSite': 'Обычная версия сайта',
        'letterSpacing': 'Межбуквенное расстояние',
        'normal': 'Стандартный',
        'average': 'Средний',
        'big': 'Большой',
        'lineHeight': 'Межстрочный интервал',
        'font': 'Шрифт',
        'arial': 'Без засечек',
        'times': 'С засечками',
        'builtElements': 'Встроенные элементы (Видео, карты и тд.)',
        'on': 'Включить',
        'off': 'Выключить',
        'reset': 'Сбросить настройки',
        'plural_0': 'пиксель',
        'plural_1': 'пекселя',
        'plural_2': 'пикселей'
      },
      'voice': {
        'fontSizePlus': 'Размер шрифта увели́чен',
        'fontSizeMinus': 'Размер шрифта уме́ньшен',
        'siteColorBlackOnWhite': 'Цвет сайта черным по белому',
        'siteColorWhiteOnBlack': 'Цвет сайта белым по черному',
        'siteColorDarkBlueOnBlue': 'Цвет сайта тёмно-синим по голубому',
        'siteColorBeigeBrown': 'Цвет сайта кори́чневым по бе́жевому',
        'siteColorGreenOnDarkBrown': 'Цвет сайта зеленым по тёмно-коричневому',
        'imagesOn': 'Изображения включены',
        'imagesOFF': 'Изображения выключены',
        'imagesGrayscale': 'Изображения чёрно-белые',
        'speechOn': 'Синтез речи включён',
        'speechOff': 'Синтез речи вы́ключен',
        'lineHeightNormal': 'Межстрочный интервал стандартный',
        'lineHeightAverage': 'Межстрочный интервал средний',
        'lineHeightBig': 'Межстрочный интервал большой',
        'LetterSpacingNormal': 'Интервал между буквами стандартный',
        'LetterSpacingAverage': 'Интервал между буквами средний',
        'LetterSpacingBig': 'Интервал между буквами большой',
        'fontArial': 'Шрифт без засечек',
        'fontTimes': 'Шрифт с засечками',
        'builtElementsOn': 'Встроенные элементы включены',
        'builtElementsOFF': 'Встроенные элементы выключены',
        'resetSettings': 'Установлены настройки по умолча́нию',
        'panelShow': 'Панель открыта',
        'panelHide': 'Панель скрыта',
        'panelOn': 'Версия сайта для слабови́дящий',
        'panelOff': 'Обычная версия сайта'
      }
    },
    'en-US': {
      'text': {
        'fontSize': 'Font size',
        'siteColors': 'Site colors',
        'images': 'Images',
        'speech': 'Speech synthesis',
        'settings': 'Settings',
        'regularVersionOfTheSite': 'Regular version Of The site',
        'letterSpacing': 'Letter spacing',
        'normal': 'Single',
        'average': 'One and a half',
        'big': 'Double',
        'lineHeight': 'Line spacing',
        'font': 'Font',
        'arial': 'Sans Serif - Arial',
        'times': 'Serif - Times New Roman',
        'builtElements': 'Include inline elements (Videos, maps, etc.)',
        'on': 'Enable',
        'off': 'Disabled',
        'reset': 'Reset settings',
        'plural_0': 'pixel',
        'plural_1': 'pixels',
        'plural_2': 'pixels'
      },
      'voice': {
        'fontSizePlus': 'Font size increased',
        'fontSizeMinus': 'Font size reduced',
        'siteColorBlackOnWhite': 'Site color black on white',
        'siteColorWhiteOnBlack': 'Site color white on black',
        'siteColorDarkBlueOnBlue': 'Site color dark blue on cyan',
        'siteColorBeigeBrown': 'SiteColorBeigeBrown',
        'siteColorGreenOnDarkBrown': 'Site color green on dark brown',
        'imagesOn': 'Images enable',
        'imagesOFF': 'Images disabled',
        'imagesGrayscale': 'Images gray scale',
        'speechOn': 'Synthesis speech enable',
        'speechOff': 'Synthesis speech disabled',
        'lineHeightNormal': 'Line spacing single',
        'lineHeightAverage': 'Line spacing one and a half',
        'lineHeightBig': 'Line spacing double',
        'LetterSpacingNormal': 'Letter spacing single',
        'LetterSpacingAverage': 'Letter spacing one and a half',
        'LetterSpacingBig': 'Letter spacing letter double',
        'fontArial': 'Sans Serif - Arial',
        'fontTimes': 'Serif - Times New Roman',
        'builtElementsOn': 'Include inline elements are enabled',
        'builtElementsOFF': 'Include inline elements are disabled',
        'resetSettings': 'Default settings have been set',
        'panelShow': 'Panel show',
        'panelHide': 'Panel hide',
        'panelOn': 'Site version for visually impaired',
        'panelOff': 'Regular version of the site'
      }
    }
  };
  var I18n = /*#__PURE__*/function () {
    function I18n(options) {
      _classCallCheck(this, I18n);
      this._config = options;
    }
    _createClass(I18n, [{
      key: "t",
      value: function t(key) {
        return lang[this._config.lang]['text'][key];
      }
    }, {
      key: "v",
      value: function v(key) {
        return lang[this._config.lang]['voice'][key];
      }
    }]);
    return I18n;
  }();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var Default = {
    target: '.bvi-open',
    fontSize: 16,
    theme: 'white',
    images: 'grayscale',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    speech: true,
    fontFamily: 'arial',
    builtElements: false,
    panelFixed: true,
    panelHide: false,
    reload: false,
    lang: 'ru-RU'
  };
  var DefaultType = {
    target: 'string',
    fontSize: 'number',
    theme: 'string',
    images: '(string|boolean)',
    letterSpacing: 'string',
    lineHeight: 'string',
    speech: 'boolean',
    fontFamily: 'string',
    builtElements: 'boolean',
    panelFixed: 'boolean',
    panelHide: 'boolean',
    reload: 'boolean',
    lang: 'string'
  };
  var DefaultOptions = {
    target: '',
    fontSize: '(^[1-9]$|^[1-3][0-9]?$|^39$)',
    theme: '(white|black|blue|brown|green)',
    images: '(true|false|grayscale)',
    letterSpacing: '(normal|average|big)',
    lineHeight: '(normal|average|big)',
    speech: '(true|false)',
    fontFamily: '(arial|times)',
    builtElements: '(true|false)',
    panelFixed: '(true|false)',
    panelHide: '(true|false)',
    reload: '(true|false)',
    lang: '(ru-RU|en-US)'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
  var Bvi = /*#__PURE__*/function () {
    function Bvi(options) {
      _classCallCheck(this, Bvi);
      this._config = this._getConfig(options);
      this._elements = document.querySelectorAll(this._config.target);
      this._i18n = new I18n({
        lang: this._config.lang
      });
      this._addEventListeners();
      this._init();
      console.log('Bvi console: ready Button visually impaired v1.0.0');
    }

    // Private
    _createClass(Bvi, [{
      key: "_init",
      value: function _init() {
        getObject(this._config, function (key) {
          if (typeof getCookie(key) === 'undefined') {
            removeCookie('panelActive');
          }
        });
        if (stringToBoolean(getCookie('panelActive'))) {
          this._set();
          this._getPanel();
          this._addEventListenersPanel();
          this._images();
          this._speechPlayer();
          if ('speechSynthesis' in window && stringToBoolean(getCookie('speech'))) {
            setInterval(function () {
              if (synth().pending === false) {
                var play = document.querySelectorAll('.bvi-speech-play');
                var pause = document.querySelectorAll('.bvi-speech-pause');
                var resume = document.querySelectorAll('.bvi-speech-resume');
                var stop = document.querySelectorAll('.bvi-speech-stop');
                var el = function el(elements, callback) {
                  elements.forEach(function (element) {
                    return callback(element);
                  });
                };
                el(play, function (element) {
                  return element.classList.remove('disabled');
                });
                el(pause, function (element) {
                  return element.classList.add('disabled');
                });
                el(resume, function (element) {
                  return element.classList.add('disabled');
                });
                el(stop, function (element) {
                  return element.classList.add('disabled');
                });
              }
            }, 1000);
          }
        } else {
          this._remove();
        }
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this = this;
        if (!this._elements) {
          return false;
        }
        this._elements.forEach(function (element) {
          element.addEventListener('click', function (event) {
            event.preventDefault();
            getObject(_this._config, function (key) {
              return setCookie(key, _this._config[key]);
            });
            setCookie('panelActive', true);
            _this._init();
            _this._speech("".concat(_this._i18n.v('panelOn')));
          });
        });
      }
    }, {
      key: "_addEventListenersPanel",
      value: function _addEventListenersPanel() {
        var _this2 = this;
        var elements = {
          fontSizeMinus: document.querySelector('.bvi-fontSize-minus'),
          fontSizePlus: document.querySelector('.bvi-fontSize-plus'),
          themeWhite: document.querySelector('.bvi-theme-white'),
          themeBlack: document.querySelector('.bvi-theme-black'),
          themeBlue: document.querySelector('.bvi-theme-blue'),
          themeBrown: document.querySelector('.bvi-theme-brown'),
          themeGreen: document.querySelector('.bvi-theme-green'),
          imagesOn: document.querySelector('.bvi-images-on'),
          imagesOff: document.querySelector('.bvi-images-off'),
          imagesGrayscale: document.querySelector('.bvi-images-grayscale'),
          speechOn: document.querySelector('.bvi-speech-on'),
          speechOff: document.querySelector('.bvi-speech-off'),
          lineHeightNormal: document.querySelector('.bvi-line-height-normal'),
          lineHeightAverage: document.querySelector('.bvi-line-height-average'),
          lineHeightBig: document.querySelector('.bvi-line-height-big'),
          letterSpacingNormal: document.querySelector('.bvi-letter-spacing-normal'),
          letterSpacingAverage: document.querySelector('.bvi-letter-spacing-average'),
          letterSpacingBig: document.querySelector('.bvi-letter-spacing-big'),
          fontFamilyArial: document.querySelector('.bvi-font-family-arial'),
          fontFamilyTimes: document.querySelector('.bvi-font-family-times'),
          builtElementsOn: document.querySelector('.bvi-built-elements-on'),
          builtElementsOff: document.querySelector('.bvi-built-elements-off'),
          reset: document.querySelector('.bvi-reset'),
          links: document.querySelectorAll('.bvi-link'),
          modal: document.querySelector('.bvi-modal')
        };
        var activeLink = function activeLink(element) {
          var _iterator = _createForOfIteratorHelper(element.parentNode.children),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sibling = _step.value;
              sibling.classList.remove('active');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          element.classList.add('active');
        };
        var click = function click(element, callback) {
          element.addEventListener('click', function (event) {
            event.preventDefault();
            if (typeof callback === 'function') {
              callback(event);
            }
          });
        };
        var activeAll = function activeAll() {
          var links = document.querySelectorAll('.bvi-link');
          links.forEach(function (link) {
            link.classList.remove('active');
          });
          getObject(_this2._config, function (key) {
            if (key === 'theme') {
              var value = getCookie(key);
              document.querySelector(".bvi-theme-".concat(value)).classList.add('active');
            }
            if (key === 'images') {
              var _value = getCookie(key) === 'grayscale' ? 'grayscale' : stringToBoolean(getCookie(key)) ? 'on' : 'off';
              document.querySelector(".bvi-images-".concat(_value)).classList.add('active');
            }
            if (key === 'speech') {
              var _value2 = stringToBoolean(getCookie(key)) ? 'on' : 'off';
              document.querySelector(".bvi-speech-".concat(_value2)).classList.add('active');
            }
            if (key === 'lineHeight') {
              var _value3 = getCookie(key);
              document.querySelector(".bvi-line-height-".concat(_value3)).classList.add('active');
            }
            if (key === 'letterSpacing') {
              var _value4 = getCookie(key);
              document.querySelector(".bvi-letter-spacing-".concat(_value4)).classList.add('active');
            }
            if (key === 'fontFamily') {
              var _value5 = getCookie(key);
              document.querySelector(".bvi-font-family-".concat(_value5)).classList.add('active');
            }
            if (key === 'builtElements') {
              var _value6 = stringToBoolean(getCookie(key)) ? 'on' : 'off';
              document.querySelector(".bvi-built-elements-".concat(_value6)).classList.add('active');
            }
          });
        };
        activeAll();

        // Font size
        click(elements.fontSizeMinus, function () {
          var size = parseFloat(getCookie('fontSize')) - 1;
          if (size !== 0) {
            _this2._setAttrDataBviBody('fontSize', size);
            setCookie('fontSize', size);
            _this2._speech("".concat(_this2._i18n.v('fontSizeMinus')));
            activeLink(elements.fontSizeMinus);
          }
        });
        click(elements.fontSizePlus, function () {
          var size = parseFloat(getCookie('fontSize')) + 1;
          if (size !== 40) {
            _this2._setAttrDataBviBody('fontSize', size);
            setCookie('fontSize', size);
            _this2._speech("".concat(_this2._i18n.v('fontSizePlus')));
            activeLink(elements.fontSizePlus);
          }
        });

        // Theme
        click(elements.themeWhite, function () {
          _this2._setAttrDataBviBody('theme', 'white');
          setCookie('theme', 'white');
          _this2._speech("".concat(_this2._i18n.v('siteColorBlackOnWhite')));
          activeLink(elements.themeWhite);
        });
        click(elements.themeBlack, function () {
          _this2._setAttrDataBviBody('theme', 'black');
          setCookie('theme', 'black');
          _this2._speech("".concat(_this2._i18n.v('siteColorWhiteOnBlack')));
          activeLink(elements.themeBlack);
        });
        click(elements.themeBlue, function () {
          _this2._setAttrDataBviBody('theme', 'blue');
          setCookie('theme', 'blue');
          _this2._speech("".concat(_this2._i18n.v('siteColorDarkBlueOnBlue')));
          activeLink(elements.themeBlue);
        });
        click(elements.themeBrown, function () {
          _this2._setAttrDataBviBody('theme', 'brown');
          setCookie('theme', 'brown');
          _this2._speech("".concat(_this2._i18n.v('siteColorBeigeBrown')));
          activeLink(elements.themeBrown);
        });
        click(elements.themeGreen, function () {
          _this2._setAttrDataBviBody('theme', 'green');
          setCookie('theme', 'green');
          _this2._speech("".concat(_this2._i18n.v('siteColorGreenOnDarkBrown')));
          activeLink(elements.themeGreen);
        });

        // Images
        click(elements.imagesOn, function () {
          _this2._setAttrDataBviBody('images', 'true');
          setCookie('images', 'true');
          _this2._speech("".concat(_this2._i18n.v('imagesOn')));
          activeLink(elements.imagesOn);
        });
        click(elements.imagesOff, function () {
          _this2._setAttrDataBviBody('images', 'false');
          setCookie('images', 'false');
          _this2._speech("".concat(_this2._i18n.v('imagesOFF')));
          activeLink(elements.imagesOff);
        });
        click(elements.imagesGrayscale, function () {
          _this2._setAttrDataBviBody('images', 'grayscale');
          setCookie('images', 'grayscale');
          _this2._speech("".concat(_this2._i18n.v('imagesGrayscale')));
          activeLink(elements.imagesGrayscale);
        });

        // Speech
        click(elements.speechOn, function () {
          _this2._setAttrDataBviBody('speech', 'true');
          setCookie('speech', 'true');
          _this2._speech("".concat(_this2._i18n.v('speechOn')));
          activeLink(elements.speechOn);
          _this2._speechPlayer();
        });
        click(elements.speechOff, function () {
          _this2._speech("".concat(_this2._i18n.v('speechOff')));
          _this2._setAttrDataBviBody('speech', 'false');
          setCookie('speech', 'false');
          activeLink(elements.speechOff);
          _this2._speechPlayer();
        });

        // Line height
        click(elements.lineHeightNormal, function () {
          _this2._setAttrDataBviBody('lineHeight', 'normal');
          setCookie('lineHeight', 'normal');
          _this2._speech("".concat(_this2._i18n.v('lineHeightNormal')));
          activeLink(elements.lineHeightNormal);
        });
        click(elements.lineHeightAverage, function () {
          _this2._setAttrDataBviBody('lineHeight', 'average');
          setCookie('lineHeight', 'average');
          _this2._speech("".concat(_this2._i18n.v('lineHeightAverage')));
          activeLink(elements.lineHeightAverage);
        });
        click(elements.lineHeightBig, function () {
          _this2._setAttrDataBviBody('lineHeight', 'big');
          setCookie('lineHeight', 'big');
          _this2._speech("".concat(_this2._i18n.v('lineHeightBig')));
          activeLink(elements.lineHeightBig);
        });

        // Letter spacing
        click(elements.letterSpacingNormal, function () {
          _this2._setAttrDataBviBody('letterSpacing', 'normal');
          setCookie('letterSpacing', 'normal');
          _this2._speech("".concat(_this2._i18n.v('LetterSpacingNormal')));
          activeLink(elements.letterSpacingNormal);
        });
        click(elements.letterSpacingAverage, function () {
          _this2._setAttrDataBviBody('letterSpacing', 'average');
          setCookie('letterSpacing', 'average');
          _this2._speech("".concat(_this2._i18n.v('LetterSpacingAverage')));
          activeLink(elements.letterSpacingAverage);
        });
        click(elements.letterSpacingBig, function () {
          _this2._setAttrDataBviBody('letterSpacing', 'big');
          setCookie('letterSpacing', 'big');
          _this2._speech("".concat(_this2._i18n.v('LetterSpacingBig')));
          activeLink(elements.letterSpacingBig);
        });

        // Font family
        click(elements.fontFamilyArial, function () {
          _this2._setAttrDataBviBody('fontFamily', 'arial');
          setCookie('fontFamily', 'arial');
          _this2._speech("".concat(_this2._i18n.v('fontArial')));
          activeLink(elements.fontFamilyArial);
        });
        click(elements.fontFamilyTimes, function () {
          _this2._setAttrDataBviBody('fontFamily', 'times');
          setCookie('fontFamily', 'times');
          _this2._speech("".concat(_this2._i18n.v('fontTimes')));
          activeLink(elements.fontFamilyTimes);
        });

        // Built elements
        click(elements.builtElementsOn, function () {
          _this2._setAttrDataBviBody('builtElements', 'true');
          setCookie('builtElements', 'true');
          _this2._speech("".concat(_this2._i18n.v('builtElementsOn')));
          activeLink(elements.builtElementsOn);
        });
        click(elements.builtElementsOff, function () {
          _this2._setAttrDataBviBody('builtElements', 'false');
          setCookie('builtElements', 'false');
          _this2._speech("".concat(_this2._i18n.v('builtElementsOFF')));
          activeLink(elements.builtElementsOff);
        });

        // Reset
        click(elements.reset, function () {
          _this2._speech("".concat(_this2._i18n.v('resetSettings')));
          getObject(_this2._config, function (key) {
            _this2._setAttrDataBviBody(key, _this2._config[key]);
            setCookie(key, _this2._config[key]);
            activeAll();
          });
        });
        getArray(elements.links, function (element) {
          click(element, function (event) {
            var target = event.target.getAttribute('data-bvi');
            if (target === 'close') {
              _this2._setAttrDataBviBody('panelActive', 'false');
              setCookie('panelActive', 'false');
              _this2._init();
            }
            if (target === 'modal') {
              document.body.style.overflow = 'hidden';
              document.body.classList.add('bvi-noscroll');
              elements.modal.classList.toggle('show');
            }
            if (target === 'modal-close') {
              document.body.classList.remove('bvi-noscroll');
              document.body.style.overflow = '';
              elements.modal.classList.remove('show');
            }
            if (target === 'panel-hide') {
              document.querySelector('.bvi-panel').classList.add('bvi-panel-hide');
              document.querySelector('.bvi-link-fixed-top').classList.remove('bvi-hide');
              document.querySelector('.bvi-link-fixed-top').classList.add('bvi-show');
              setCookie('panelHide', 'true');
              _this2._speech("".concat(_this2._i18n.v('panelHide')));
            }
            if (target === 'panel-show') {
              document.querySelector('.bvi-link-fixed-top').classList.remove('bvi-show');
              document.querySelector('.bvi-link-fixed-top').classList.add('bvi-hide');
              document.querySelector('.bvi-panel').classList.remove('bvi-panel-hide');
              setCookie('panelHide', 'false');
              _this2._speech("".concat(_this2._i18n.v('panelShow')));
            }
          });
        });
        click(elements.modal, function (event) {
          if (event.target.contains(elements.modal)) {
            document.body.classList.remove('bvi-noscroll');
            document.body.style.overflow = '';
            elements.modal.classList.remove('show');
          }
        });
      }
    }, {
      key: "_getPanel",
      value: function _getPanel() {
        var scroll = function scroll() {
          var scroll = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          if (stringToBoolean(getCookie('panelFixed'))) {
            if (scroll > 200) {
              document.querySelector('.bvi-panel').classList.add('bvi-fixed-top');
            } else {
              document.querySelector('.bvi-panel').classList.remove('bvi-fixed-top');
            }
          }
        };
        var panelHide = stringToBoolean(getCookie('panelHide')) ? ' bvi-panel-hide' : '';
        var linkHide = !stringToBoolean(getCookie('panelHide')) ? ' bvi-hide' : 'bvi-show';
        var html = "\n    <div class='bvi-panel".concat(panelHide, "'>\n        <div class=\"bvi-blocks bvi-block-center\">\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('fontSize'), "</div>\n                <a class=\"bvi-link bvi-fontSize-minus\">\u0410-</a>\n                <a class=\"bvi-link bvi-fontSize-plus\">\u0410+</a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('siteColors'), "</div>\n                <a href=\"#\" class=\"bvi-link bvi-theme-white\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-black\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-blue\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-brown\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-green\">\u0426</a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('images'), "</div>\n                <a href=\"#\" class=\"bvi-link bvi-images-on\">\n                    <i class=\"bvi-images bvi-images-image\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link bvi-images-off\">\n                    <i class=\"bvi-images bvi-images-minus-circle\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link bvi-images-grayscale\">\n                    <i class=\"bvi-images bvi-images-adjust\"></i>\n                </a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('speech'), "</div>\n                <a href=\"#\" class=\"bvi-link bvi-speech-off\">\n                    <i class=\"bvi-images bvi-images-volume-off\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link bvi-speech-on\">\n                    <i class=\"bvi-images bvi-images-volume-up\"></i>\n                </a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('settings'), "</div>\n                <a href=\"#\" class=\"bvi-link\" data-bvi=\"modal\">\n                    <i class=\"bvi-images bvi-images-cog\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link\" data-bvi=\"close\">\n                    ").concat(this._i18n.t('regularVersionOfTheSite'), "\n                </a>\n                <a href=\"#\" class=\"bvi-link\" data-bvi=\"panel-hide\">\n                    <i class=\"bvi-images bvi-images-minus\"></i>\n                </a>\n            </div>\n        </div>\n        <div class=\"bvi-modal\">\n            <div class=\"bvi-modal-dialog\">\n                <div class=\"bvi-modal-content\">\n                    <div class=\"bvi-modal-header\">\n                        <div class=\"bvi-modal-title\">").concat(this._i18n.t('settings'), "</div>\n                        <a href=\"#\" class=\"bvi-link bvi-modal-close\" data-bvi=\"modal-close\">\xD7</a>\n                    </div>\n                    <div class=\"bvi-modal-body\">\n                        <div class=\"bvi-blocks bvi-block-center\">\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('letterSpacing'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-letter-spacing-normal\">").concat(this._i18n.t('normal'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-letter-spacing-average\">").concat(this._i18n.t('average'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-letter-spacing-big\">").concat(this._i18n.t('big'), "</a>\n                            </div>\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('lineHeight'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-line-height-normal\">").concat(this._i18n.t('normal'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-line-height-average\">").concat(this._i18n.t('average'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-line-height-big\">").concat(this._i18n.t('big'), "</a>\n                            </div>\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('font'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-font-family-arial\">").concat(this._i18n.t('arial'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-font-family-times\">").concat(this._i18n.t('times'), "</a>\n                            </div>\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('builtElements'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-built-elements-on\">").concat(this._i18n.t('on'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-built-elements-off\">").concat(this._i18n.t('off'), "</a>\n                            </div>\n                        </div>\n                        <div class=\"bvi-blocks bvi-block-center\">\n                            <a href=\"https://bvi.isvek.ru\" class=\"bvi-copyright\" target=\"_blank\">bvi.isvek.ru</a>\n                        </div>\n                    </div>\n                    <div class=\"bvi-modal-footer\">\n                        <a href=\"#\" class=\"bvi-link bvi-reset\">").concat(this._i18n.t('reset'), "</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");
        var link = "<a href=\"#\" class=\"bvi-link bvi-link-fixed-top bvi-no-styles ".concat(linkHide, "\" data-bvi=\"panel-show\">") + '<i class="bvi-images bvi-images-eye bvi-images-size-32 bvi-no-styles"></i></a>';
        window.addEventListener('scroll', scroll);
        document.querySelector('.bvi-body').insertAdjacentHTML('beforebegin', html);
        document.querySelector('.bvi-body').insertAdjacentHTML('afterbegin', link);
        scroll();
      }
    }, {
      key: "_set",
      value: function _set() {
        var _this3 = this;
        document.body.classList.add('bvi-active');
        wrapInner(document.body, 'div', 'bvi-body');
        getObject(this._config, function (key) {
          return _this3._setAttrDataBviBody(key, getCookie(key));
        });
        getArray(this._elements, function (element) {
          return element.style.display = 'none';
        });
        document.querySelectorAll('img').forEach(function (element) {
          if (element.classList.contains('bvi-img')) {
            element.classList.remove('bvi-img');
          }
        });
        document.querySelectorAll('body *').forEach(function (element) {
          if (element.classList.contains('bvi-background-image')) {
            element.classList.remove('bvi-background-image');
          }
        });
      }
    }, {
      key: "_remove",
      value: function _remove() {
        var body = document.body;
        var bviPanel = document.querySelector('.bvi-panel');
        var bviBody = document.querySelector('.bvi-body');
        var bviLinkFixedTop = document.querySelector('.bvi-link-fixed-top');
        if (bviPanel) {
          bviPanel.remove();
        }
        if (bviBody) {
          unwrap(bviBody);
        }
        if (bviLinkFixedTop) {
          bviLinkFixedTop.remove();
        }
        this._speech("".concat(this._i18n.v('panelOff')));
        body.classList.remove('bvi-active');
        body.getAttributeNames().forEach(function (attr) {
          attr.indexOf('data-bvi') === 0 && body.removeAttribute(attr);
        });
        getArray(this._elements, function (element) {
          return element.style.display = '';
        });
        if (stringToBoolean(getCookie('reload'))) {
          document.location.reload();
        }
        getObject(this._config, function (key) {
          removeCookie(key);
        });
        this._speechPlayer();
        removeCookie('panelActive');
      }
    }, {
      key: "_images",
      value: function _images() {
        document.querySelectorAll('img').forEach(function (element) {
          if (!element.classList.contains('bvi-no-style')) {
            element.classList.add('bvi-img');
          }
        });
        document.querySelectorAll('.bvi-body *').forEach(function (element) {
          var style = getComputedStyle(element);
          if (style.backgroundImage !== 'none' && style.background !== 'none' && !element.classList.contains('bvi-no-style')) {
            element.classList.add('bvi-background-image');
          }
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default), config);
        var extended = {};
        for (var keyDefault in Default) {
          extended[keyDefault] = config[keyDefault];
        }
        checkConfig(extended, DefaultType, DefaultOptions);
        return extended;
      }
    }, {
      key: "_setAttrDataBviBody",
      value: function _setAttrDataBviBody() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var attr = "data-bvi-".concat(name);
        document.querySelector('.bvi-body').setAttribute(attr, value);
        document.body.setAttribute(attr, value);
      }
    }, {
      key: "_speechPlayer",
      value: function _speechPlayer() {
        var _this4 = this;
        var selectorSpeechText = document.querySelectorAll('.bvi-speech-text');
        var selectorSpeechLink = document.querySelectorAll('.bvi-speech-link');
        var selectorBviSpeech = document.querySelectorAll('.bvi-speech');
        if ('speechSynthesis' in window && stringToBoolean(getCookie('speech'))) {
          if (selectorBviSpeech) {
            if (selectorSpeechText) {
              selectorSpeechText.forEach(function (element) {
                return unwrap(element);
              });
            }
            if (selectorSpeechLink) {
              selectorSpeechLink.forEach(function (element) {
                return element.remove();
              });
            }
            selectorBviSpeech.forEach(function (speechDivBlock, index) {
              var id = "bvi-speech-text-id-".concat(index + 1);
              var html = "\n            <div class=\"bvi-speech-link\">\n              <a href=\"#\" class=\"bvi-link bvi-speech-play\" title=\"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438\">\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438</a>\n              <a href=\"#\" class=\"bvi-link bvi-speech-pause disabled\" title=\"\u041F\u0430\u0443\u0437\u0430\">\u041F\u0430\u0443\u0437\u0430</a>\n              <a href=\"#\" class=\"bvi-link bvi-speech-resume disabled\" title=\"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</a>\n              <a href=\"#\" class=\"bvi-link bvi-speech-stop disabled\" title=\"\u0421\u0442\u043E\u043F\">\u0421\u0442\u043E\u043F</i></a>\n          </div>";
              wrapInner(speechDivBlock, 'div', "bvi-speech-text ".concat(id));
              speechDivBlock.insertAdjacentHTML('afterbegin', html);
            });
            var selectorPlay = document.querySelectorAll('.bvi-speech-play');
            var selectorPause = document.querySelectorAll('.bvi-speech-pause');
            var selectorResume = document.querySelectorAll('.bvi-speech-resume');
            var selectorStop = document.querySelectorAll('.bvi-speech-stop');
            var el = function el(elements, callback) {
              elements.forEach(function (element) {
                element.addEventListener('click', function (event) {
                  event.preventDefault();
                  if (typeof callback === 'function') {
                    return callback(element, event);
                  }
                }, false);
              });
            };
            el(selectorPlay, function (element, event) {
              var target = event.target;
              var text = target.parentNode.nextElementSibling;
              var closest = event.target.closest('.bvi-speech-link');
              var play = document.querySelectorAll('.bvi-speech-play');
              var pause = document.querySelectorAll('.bvi-speech-pause');
              var resume = document.querySelectorAll('.bvi-speech-resume');
              var stop = document.querySelectorAll('.bvi-speech-stop');
              _this4._speech(text.textContent, text, true);
              play.forEach(function (element) {
                return element.classList.remove('disabled');
              });
              pause.forEach(function (element) {
                return element.classList.add('disabled');
              });
              resume.forEach(function (element) {
                return element.classList.add('disabled');
              });
              stop.forEach(function (element) {
                return element.classList.add('disabled');
              });
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-pause').classList.remove('disabled');
              closest.querySelector('.bvi-speech-stop').classList.remove('disabled');
            });
            el(selectorPause, function (element, event) {
              var target = event.target;
              var closest = event.target.closest('.bvi-speech-link');
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-resume').classList.remove('disabled');
              synth().pause();
            });
            el(selectorResume, function (element, event) {
              var target = event.target;
              var closest = event.target.closest('.bvi-speech-link');
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-pause').classList.remove('disabled');
              synth().resume();
            });
            el(selectorStop, function (element, event) {
              var target = event.target;
              var closest = event.target.closest('.bvi-speech-link');
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-pause').classList.add('disabled');
              closest.querySelector('.bvi-speech-play').classList.remove('disabled');
              synth().cancel();
            });
          }
        } else {
          if (selectorSpeechText) {
            selectorSpeechText.forEach(function (element) {
              return unwrap(element);
            });
          }
          if (selectorSpeechLink) {
            selectorSpeechLink.forEach(function (element) {
              return element.remove();
            });
          }
        }
      }
    }, {
      key: "_speech",
      value: function _speech(text, element) {
        var _this5 = this;
        var echo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if ('speechSynthesis' in window && stringToBoolean(getCookie('speech'))) {
          synth().cancel();
          var getWordAt = function getWordAt(str, pos) {
            str = String(str);
            pos = Number(pos) >>> 0;
            var left = str.slice(0, pos + 1).search(/\S+$/);
            var right = str.slice(pos).search(/\s/);
            if (right < 0) {
              return str.slice(left);
            }
            return str.slice(left, right + pos);
          };
          var chunkLength = 120;
          var patternRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
          var array = [];
          var $text = text;
          var voices = synth().getVoices();
          while ($text.length > 0) {
            array.push($text.match(patternRegex)[0]);
            $text = $text.substring(array[array.length - 1].length);
          }
          array.forEach(function (getText) {
            var utter = new SpeechSynthesisUtterance(getText.trim());
            utter.volume = 1;
            utter.rate = 1;
            utter.pitch = 1;
            utter.lang = _this5._config.lang;
            for (var i = 0; i < voices.length; i++) {
              if (_this5._config.lang === 'ru-RU' && voices[i].name === 'Microsoft Pavel - Russian (Russia)') {
                utter.voice = voices[i];
              }
              if (_this5._config.lang === 'en-US' && voices[i].name === 'Microsoft Pavel - English (English)') {
                utter.voice = voices[i];
              }
            }
            if (echo) {
              utter.onboundary = function (event) {
                element.classList.add('bvi-highlighting');
                var world = getWordAt(event.utterance.text, event.charIndex);
                var textContent = element.textContent;
                var term = world.replace(/(\s+)/, '((<[^>]+>)*$1(<[^>]+>)*)');
                var pattern = new RegExp('(' + term + ')', 'gi');
                textContent = textContent.replace(pattern, '<mark>$1</mark>');
                textContent = textContent.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, '$1</mark>$2<mark>$4');
                element.innerHTML = textContent;
              };
              utter.onend = function (event) {
                element.classList.remove('bvi-highlighting');
                var textContent = element.textContent;
                textContent = textContent.replace(/(<mark>$1<\/mark>)/, '$1');
                element.innerHTML = textContent;
              };
            }
            synth().speak(utter);
          });
        }
      }
    }]);
    return Bvi;
  }();

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): index.umd.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Bvi: Bvi
  };

  return index_umd;

}));
//# sourceMappingURL=bvi.js.map
