(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/main.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/finally-polyfill.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/finally-polyfill.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Promise.prototype.finally=function(n){if("function"!=typeof n)return this.then(n,n);var t=this.constructor||Promise;return this.then(function(r){return t.resolve(n()).then(function(){return r})},function(r){return t.resolve(n()).then(function(){throw r})})};

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/dev-build-watcher.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/dev-build-watcher.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = initializeBuildWatcher;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

function initializeBuildWatcher() {
  var shadowHost = document.createElement('div');
  shadowHost.id = '__next-build-watcher'; // Make sure container is fixed and on a high zIndex so it shows

  shadowHost.style.position = 'fixed';
  shadowHost.style.bottom = '10px';
  shadowHost.style.right = '20px';
  shadowHost.style.width = 0;
  shadowHost.style.height = 0;
  shadowHost.style.zIndex = 99999;
  document.body.appendChild(shadowHost);
  var shadowRoot;
  var prefix = '';

  if (shadowHost.attachShadow) {
    shadowRoot = shadowHost.attachShadow({
      mode: 'open'
    });
  } else {
    // If attachShadow is undefined then the browser does not support
    // the Shadow DOM, we need to prefix all the names so there
    // will be no conflicts
    shadowRoot = shadowHost;
    prefix = '__next-build-watcher-';
  } // Container


  var container = createContainer(prefix);
  shadowRoot.appendChild(container); // CSS

  var css = createCss(prefix);
  shadowRoot.appendChild(css); // State

  var isVisible = false;
  var isBuilding = false;
  var timeoutId = null; // Handle events

  var evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: '/_next/webpack-hmr'
  });
  evtSource.addMessageListener(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      handleMessage(event);
    } catch (_unused) {}
  });

  function handleMessage(event) {
    var obj = JSON.parse(event.data); // eslint-disable-next-line default-case

    switch (obj.action) {
      case 'building':
        timeoutId && clearTimeout(timeoutId);
        isVisible = true;
        isBuilding = true;
        updateContainer();
        break;

      case 'built':
        isBuilding = false; // Wait for the fade out transtion to complete

        timeoutId = setTimeout(function () {
          isVisible = false;
          updateContainer();
        }, 100);
        updateContainer();
        break;
    }
  }

  function updateContainer() {
    if (isBuilding) {
      container.classList.add(prefix + "building");
    } else {
      container.classList.remove(prefix + "building");
    }

    if (isVisible) {
      container.classList.add(prefix + "visible");
    } else {
      container.classList.remove(prefix + "visible");
    }
  }
}

function createContainer(prefix) {
  var container = document.createElement('div');
  container.id = prefix + "container";
  container.innerHTML = "\n    <div id=\"" + prefix + "icon-wrapper\">\n      <svg viewBox=\"0 0 226 200\">\n        <defs>\n          <linearGradient\n            x1=\"114.720775%\"\n            y1=\"181.283245%\"\n            x2=\"39.5399306%\"\n            y2=\"100%\"\n            id=\"" + prefix + "linear-gradient\"\n          >\n            <stop stop-color=\"#FFFFFF\" offset=\"0%\" />\n            <stop stop-color=\"#000000\" offset=\"100%\" />\n          </linearGradient>\n        </defs>\n        <g id=\"" + prefix + "icon-group\" fill=\"none\" stroke=\"url(#" + prefix + "linear-gradient)\" stroke-width=\"18\">\n          <path d=\"M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z\" />\n        </g>\n      </svg>\n    </div>\n  ";
  return container;
}

function createCss(prefix) {
  var css = document.createElement('style');
  css.textContent = "\n    #" + prefix + "container {\n      position: absolute;\n      bottom: 10px;\n      right: 30px;\n\n      background: #fff;\n      color: #000;\n      font: initial;\n      cursor: initial;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n\n      padding: 8px 10px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: none;\n      opacity: 0;\n      transition: opacity 0.1s ease, bottom 0.1s ease;\n      animation: " + prefix + "fade-in 0.1s ease-in-out;\n    }\n\n    #" + prefix + "container." + prefix + "visible {\n      display: flex;\n    }\n\n    #" + prefix + "container." + prefix + "building {\n      bottom: 20px;\n      opacity: 1;\n    }\n\n    #" + prefix + "icon-wrapper {\n      width: 16px;\n      height: 16px;\n    }\n\n    #" + prefix + "icon-wrapper > svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    #" + prefix + "icon-group {\n      animation: " + prefix + "strokedash 1s ease-in-out both infinite;\n    }\n\n    @keyframes " + prefix + "fade-in {\n      from {\n        bottom: 10px;\n        opacity: 0;\n      }\n      to {\n        bottom: 20px;\n        opacity: 1;\n      }\n    }\n\n    @keyframes " + prefix + "strokedash {\n      0% {\n        stroke-dasharray: 0 226;\n      }\n      80%,\n      100% {\n        stroke-dasharray: 659 226;\n      }\n    }\n  ";
  return css;
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
MIT License
Copyright (c) 2015-present, Facebook, Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
} // Cleans up webpack error messages.


function formatMessage(message) {
  var lines = message.split('\n'); // Strip Webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js

  lines = lines.filter(function (line) {
    return !/Module [A-z ]+\(from/.test(line);
  }); // Transform parsing error into syntax error
  // TODO: move this to our ESLint formatter?

  lines = lines.map(function (line) {
    var parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);

    if (!parsingError) {
      return line;
    }

    var _parsingError = _slicedToArray(parsingError, 4),
        errorLine = _parsingError[1],
        errorColumn = _parsingError[2],
        errorMessage = _parsingError[3];

    return friendlySyntaxErrorLabel + " " + errorMessage + " (" + errorLine + ":" + errorColumn + ")";
  });
  message = lines.join('\n'); // Smoosh syntax errors (commonly found in CSS)

  message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, friendlySyntaxErrorLabel + " $3 ($1:$2)\n"); // Clean up export errors

  message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
  message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
  message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
  lines = message.split('\n'); // Remove leading newline

  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  } // Clean up file name


  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1'); // Cleans up verbose "module not found" messages for files and packages.

  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {
    lines = [lines[0], lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:')];
  } // Add helpful message for users trying to use Sass for the first time


  if (lines[1] && lines[1].match(/Cannot find module.+node-sass/)) {
    // ./file.module.scss (<<loader info>>) => ./file.module.scss
    lines[0] = lines[0].replace(/(.+) \(.+?(?=\?\?).+?\)/, '$1');
    lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
    lines[1] += 'Run `npm i sass` or `yarn add sass` inside your workspace.\n';
    lines[1] += '\nLearn more: https://err.sh/next.js/install-sass';
  }

  message = lines.join('\n'); // Internal stacks are generally useless so we strip them... with the
  // exception of stacks containing `webpack:` because they're normally
  // from user code generated by Webpack. For more information see
  // https://github.com/facebook/create-react-app/pull/1050

  message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, ''); // at ... ...:x:y

  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>

  lines = message.split('\n'); // Remove duplicated newlines

  lines = lines.filter(function (line, index, arr) {
    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
  }); // Reassemble the message

  message = lines.join('\n');
  return message.trim();
}

function formatWebpackMessages(json) {
  var formattedErrors = json.errors.map(function (message) {
    return formatMessage(message, true);
  });
  var formattedWarnings = json.warnings.map(function (message) {
    return formatMessage(message, false);
  });
  var result = {
    errors: formattedErrors,
    warnings: formattedWarnings
  };

  if (result.errors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    result.errors = result.errors.filter(isLikelyASyntaxError);
  }

  return result;
}

module.exports = formatWebpackMessages;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = connect;

var _eventsource = __webpack_require__(/*! ./eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _formatWebpackMessages = _interopRequireDefault(__webpack_require__(/*! ./format-webpack-messages */ "./node_modules/next/dist/client/dev/error-overlay/format-webpack-messages.js"));

var ErrorOverlay = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/react-error-overlay */ "./node_modules/next/dist/compiled/react-error-overlay/index.js"));

var _stripAnsi = _interopRequireDefault(__webpack_require__(/*! next/dist/compiled/strip-ansi */ "./node_modules/next/dist/compiled/strip-ansi/index.js"));

var _sourceMapSupport = __webpack_require__(/*! ./source-map-support */ "./node_modules/next/dist/client/dev/error-overlay/source-map-support.js");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable camelcase */

/**
MIT License
Copyright (c) 2013-present, Facebook, Inc.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// This file is based on https://github.com/facebook/create-react-app/blob/v1.1.4/packages/react-dev-utils/webpackHotDevClient.js
// It's been edited to rely on webpack-hot-middleware and to be more compatible with SSR / Next.js
// This alternative WebpackDevServer combines the functionality of:
// https://github.com/webpack/webpack-dev-server/blob/webpack-1/client/index.js
// https://github.com/webpack/webpack/blob/webpack-1/hot/dev-server.js
// It only supports their simplest configuration (hot updates on same server).
// It makes some opinionated choices on top, like adding a syntax error overlay
// that looks similar to our console output. The error overlay is inspired by:
// https://github.com/glenjamin/webpack-hot-middleware
// This is a modified version of create-react-app's webpackHotDevClient.js
// It implements webpack-hot-middleware's EventSource events instead of webpack-dev-server's websocket.
// https://github.com/facebook/create-react-app/blob/25184c4e91ebabd16fe1cde3d8630830e4a36a01/packages/react-dev-utils/webpackHotDevClient.js


var hadRuntimeError = false;
var customHmrEventHandler;

function connect(options) {
  // Open stack traces in an editor.
  ErrorOverlay.setEditorHandler(function editorHandler(_ref) {
    var fileName = _ref.fileName,
        lineNumber = _ref.lineNumber,
        colNumber = _ref.colNumber; // Resolve invalid paths coming from react-error-overlay

    var resolvedFilename = fileName.replace(/^webpack:\/\//, '');
    (0, _unfetch["default"])('/_next/development/open-stack-frame-in-editor' + ("?fileName=" + window.encodeURIComponent(resolvedFilename)) + ("&lineNumber=" + (lineNumber || 1)) + ("&colNumber=" + (colNumber || 1)));
  }); // We need to keep track of if there has been a runtime error.
  // Essentially, we cannot guarantee application state was not corrupted by the
  // runtime error. To prevent confusing behavior, we forcibly reload the entire
  // application. This is handled below when we are notified of a compile (code
  // change).
  // See https://github.com/facebook/create-react-app/issues/3096

  ErrorOverlay.startReportingRuntimeErrors({
    onError: function onError() {
      hadRuntimeError = true;
    }
  });

  if ( true && typeof module.hot.dispose === 'function') {
    module.hot.dispose(function () {
      // TODO: why do we need this?
      ErrorOverlay.stopReportingRuntimeErrors();
    });
  }

  (0, _eventsource.getEventSourceWrapper)(options).addMessageListener(function (event) {
    // This is the heartbeat event
    if (event.data === "\uD83D\uDC93") {
      return;
    }

    try {
      processMessage(event);
    } catch (ex) {
      console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
    }
  });
  return {
    subscribeToHmrEvent: function subscribeToHmrEvent(handler) {
      customHmrEventHandler = handler;
    },
    reportRuntimeError: function reportRuntimeError(err) {
      ErrorOverlay.reportRuntimeError(err);
    },
    prepareError: function prepareError(err) {
      // Temporary workaround for https://github.com/facebook/create-react-app/issues/4760
      // Should be removed once the fix lands
      hadRuntimeError = true; // react-error-overlay expects a type of `Error`

      var error = new Error(err.message);
      error.name = err.name;
      error.stack = err.stack; // __NEXT_DIST_DIR is provided by webpack

      (0, _sourceMapSupport.rewriteStacktrace)(error, "/home/vagrant/mysite/front/.next");
      return error;
    }
  };
} // Remember some state related to hot module replacement.


var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;
var deferredBuildError = null;

function clearOutdatedErrors() {
  // Clean up outdated compile errors, if any.
  if (typeof console !== 'undefined' && typeof console.clear === 'function') {
    if (hasCompileErrors) {
      console.clear();
    }
  }

  deferredBuildError = null;
} // Successful compilation.


function handleSuccess() {
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false; // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onHotUpdateSuccess() {
      if (deferredBuildError) {
        deferredBuildError();
      } else {
        // Only dismiss it when we're sure it's a hot update.
        // Otherwise it would flicker right before the reload.
        ErrorOverlay.dismissBuildError();
      }
    });
  }
} // Compilation with warnings (e.g. ESLint).


function handleWarnings(warnings) {
  clearOutdatedErrors(); // Print warnings to the console.

  var formatted = (0, _formatWebpackMessages["default"])({
    warnings: warnings,
    errors: []
  });

  if (typeof console !== 'undefined' && typeof console.warn === 'function') {
    for (var i = 0; i < formatted.warnings.length; i++) {
      if (i === 5) {
        console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
        break;
      }

      console.warn((0, _stripAnsi["default"])(formatted.warnings[i]));
    }
  }
} // Compilation with errors (e.g. syntax error or missing modules).


function handleErrors(errors) {
  clearOutdatedErrors();
  isFirstCompilation = false;
  hasCompileErrors = true; // "Massage" webpack messages.

  var formatted = (0, _formatWebpackMessages["default"])({
    errors: errors,
    warnings: []
  }); // Only show the first error.

  ErrorOverlay.reportBuildError(formatted.errors[0]); // Also log them to the console.

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    for (var i = 0; i < formatted.errors.length; i++) {
      console.error((0, _stripAnsi["default"])(formatted.errors[i]));
    }
  }
} // There is a newer version of the code available.


function handleAvailableHash(hash) {
  // Update last known compilation hash.
  mostRecentCompilationHash = hash;
} // Handle messages from the server.


function processMessage(e) {
  var obj = JSON.parse(e.data);

  switch (obj.action) {
    case 'building':
      {
        console.log('[HMR] bundle ' + (obj.name ? "'" + obj.name + "' " : '') + 'rebuilding');
        break;
      }

    case 'built':
    case 'sync':
      {
        clearOutdatedErrors();

        if (obj.hash) {
          handleAvailableHash(obj.hash);
        }

        var errors = obj.errors,
            warnings = obj.warnings;
        var hasErrors = Boolean(errors && errors.length);
        var hasWarnings = Boolean(warnings && warnings.length);

        if (hasErrors) {
          // When there is a compilation error coming from SSR we have to reload the page on next successful compile
          if (obj.action === 'sync') {
            hadRuntimeError = true;
          }

          handleErrors(errors);
          break;
        } else if (hasWarnings) {
          handleWarnings(warnings);
        }

        handleSuccess();
        break;
      }

    case 'typeChecked':
      {
        var _obj$data = _slicedToArray(obj.data, 1),
            _obj$data$ = _obj$data[0],
            _errors = _obj$data$.errors,
            _warnings = _obj$data$.warnings;

        var _hasErrors = Boolean(_errors && _errors.length);

        var _hasWarnings = Boolean(_warnings && _warnings.length);

        if (_hasErrors) {
          if (canApplyUpdates()) {
            handleErrors(_errors);
          } else {
            deferredBuildError = function deferredBuildError() {
              return handleErrors(_errors);
            };
          }
        } else if (_hasWarnings) {
          handleWarnings(_warnings);
        }

        break;
      }

    default:
      {
        if (customHmrEventHandler) {
          customHmrEventHandler(obj);
          break;
        }

        break;
      }
  }
} // Is there a newer version of this code available?


function isUpdateAvailable() {
  /* globals __webpack_hash__ */
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  return mostRecentCompilationHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // Attempt to update code on the fly, fall back to a hard reload.


function tryApplyUpdates(onHotUpdateSuccess) {
  var handleApplyUpdates, updatedModules;
  return _regeneratorRuntime.async(function tryApplyUpdates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          handleApplyUpdates = function _handleApplyUpdates(err, updatedModules) {
            if (err || hadRuntimeError) {
              if (err) {
                console.warn('Error while applying updates, reloading page', err);
              }

              if (hadRuntimeError) {
                console.warn('Had runtime error previously, reloading page');
              }

              window.location.reload();
              return;
            }

            if (typeof onHotUpdateSuccess === 'function') {
              // Maybe we want to do something.
              onHotUpdateSuccess();
            }

            if (isUpdateAvailable()) {
              // While we were updating, there was a new update! Do it again.
              tryApplyUpdates();
            }
          };

          if (true) {
            _context.next = 4;
            break;
          }

          // HotModuleReplacementPlugin is not in Webpack configuration.
          console.error('HotModuleReplacementPlugin is not in Webpack configuration.'); // window.location.reload();

          return _context.abrupt("return");

        case 4:
          if (!(!isUpdateAvailable() || !canApplyUpdates())) {
            _context.next = 7;
            break;
          }

          ErrorOverlay.dismissBuildError();
          return _context.abrupt("return");

        case 7:
          _context.prev = 7;
          _context.next = 10;
          return _regeneratorRuntime.awrap(module.hot.check(
          /* autoApply */
          {
            ignoreUnaccepted: true
          }));

        case 10:
          updatedModules = _context.sent;

          if (updatedModules) {
            handleApplyUpdates(null, updatedModules);
          }

          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](7);
          handleApplyUpdates(_context.t0, null);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 14]], Promise);
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/source-map-support.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/source-map-support.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.rewriteStacktrace = rewriteStacktrace;
var filenameRE = /\(([^)]+\.js):(\d+):(\d+)\)$/;

function rewriteStacktrace(e, distDir) {
  if (!e || typeof e.stack !== 'string') {
    return;
  }

  var lines = e.stack.split('\n');
  var result = lines.map(function (line) {
    return rewriteTraceLine(line, distDir);
  });
  e.stack = result.join('\n');
}

function rewriteTraceLine(trace, distDir) {
  var m = trace.match(filenameRE);

  if (m == null) {
    return trace;
  }

  var filename = m[1];
  var filenameLink = filename.replace(distDir, '/_next/development').replace(/\\/g, '/');
  trace = trace.replace(filename, filenameLink);
  return trace;
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.displayContent = displayContent;

function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-client.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-client.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js"));

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _default = function _default(_ref) {
  var assetPrefix;
  return _regeneratorRuntime.async(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          assetPrefix = _ref.assetPrefix;

          _router["default"].ready(function () {
            _router["default"].events.on('routeChangeComplete', _onDemandEntriesUtils.setupPing.bind(void 0, assetPrefix, function () {
              return _router["default"].pathname;
            }));
          });

          (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
            return _router["default"].pathname;
          }, _onDemandEntriesUtils.currentPage); // prevent HMR connection from being closed when running tests

          if (!undefined) {
            document.addEventListener('visibilitychange', function (event) {
              var state = document.visibilityState;

              if (state === 'visible') {
                (0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
                  return _router["default"].pathname;
                }, true);
              } else {
                (0, _onDemandEntriesUtils.closePing)();
              }
            });
            window.addEventListener('beforeunload', function () {
              (0, _onDemandEntriesUtils.closePing)();
            });
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = assetPrefix + "/_next/webpack-hmr?page=" + currentPage;
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/prerender-indicator.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/prerender-indicator.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = initializeBuildWatcher;

var _router = _interopRequireDefault(__webpack_require__(/*! ../router */ "./node_modules/next/dist/client/router.js"));

function initializeBuildWatcher() {
  var shadowHost = document.createElement('div');
  shadowHost.id = '__next-prerender-indicator'; // Make sure container is fixed and on a high zIndex so it shows

  shadowHost.style.position = 'fixed';
  shadowHost.style.bottom = '20px';
  shadowHost.style.right = '10px';
  shadowHost.style.width = 0;
  shadowHost.style.height = 0;
  shadowHost.style.zIndex = 99998;
  shadowHost.style.transition = 'all 100ms ease';
  document.body.appendChild(shadowHost);
  var shadowRoot;
  var prefix = '';

  if (shadowHost.attachShadow) {
    shadowRoot = shadowHost.attachShadow({
      mode: 'open'
    });
  } else {
    // If attachShadow is undefined then the browser does not support
    // the Shadow DOM, we need to prefix all the names so there
    // will be no conflicts
    shadowRoot = shadowHost;
    prefix = '__next-prerender-indicator-';
  } // Container


  var container = createContainer(prefix);
  shadowRoot.appendChild(container); // CSS

  var css = createCss(prefix);
  shadowRoot.appendChild(css);
  var expandEl = container.querySelector('a');
  var closeEl = container.querySelector("#" + prefix + "close"); // State

  var dismissKey = '__NEXT_DISMISS_PRERENDER_INDICATOR';
  var dismissUntil = parseInt(window.localStorage.getItem(dismissKey), 10);
  var dismissed = dismissUntil > new Date().getTime();
  var isVisible = !dismissed && window.__NEXT_DATA__.nextExport;

  function updateContainer() {
    if (isVisible) {
      container.classList.add(prefix + "visible");
    } else {
      container.classList.remove(prefix + "visible");
    }
  }

  var expandedClass = prefix + "expanded";
  var toggleTimeout;

  var toggleExpand = function toggleExpand(expand) {
    if (expand === void 0) {
      expand = true;
    }

    clearTimeout(toggleTimeout);
    toggleTimeout = setTimeout(function () {
      if (expand) {
        expandEl.classList.add(expandedClass);
        closeEl.style.display = 'flex';
      } else {
        expandEl.classList.remove(expandedClass);
        closeEl.style.display = 'none';
      }
    }, 50);
  };

  closeEl.addEventListener('click', function () {
    var oneHourAway = new Date().getTime() + 1 * 60 * 60 * 1000;
    window.localStorage.setItem(dismissKey, oneHourAway + '');
    isVisible = false;
    updateContainer();
  });
  closeEl.addEventListener('mouseenter', function () {
    return toggleExpand();
  });
  closeEl.addEventListener('mouseleave', function () {
    return toggleExpand(false);
  });
  expandEl.addEventListener('mouseenter', function () {
    return toggleExpand();
  });
  expandEl.addEventListener('mouseleave', function () {
    return toggleExpand(false);
  });

  _router["default"].events.on('routeChangeComplete', function () {
    isVisible = window.next.isPrerendered;
    updateContainer();
  });

  updateContainer();
}

function createContainer(prefix) {
  var container = document.createElement('div');
  container.id = prefix + "container";
  container.innerHTML = "\n    <button id=\"" + prefix + "close\" title=\"Hide indicator for session\">\n      <span>\xD7</span>\n    </button>\n    <a href=\"https://nextjs.org/docs#automatic-static-optimization-indicator\" target=\"_blank\" rel=\"noreferrer\">\n      <div id=\"" + prefix + "icon-wrapper\">\n          <svg width=\"15\" height=\"20\" viewBox=\"0 0 60 80\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M36 3L30.74 41H8L36 3Z\" fill=\"black\"/>\n          <path d=\"M25 77L30.26 39H53L25 77Z\" fill=\"black\"/>\n          <path d=\"M13.5 33.5L53 39L47.5 46.5L7 41.25L13.5 33.5Z\" fill=\"black\"/>\n          </svg>\n          Prerendered Page\n      </div>\n    </a>\n  ";
  return container;
}

function createCss(prefix) {
  var css = document.createElement('style');
  css.textContent = "\n    #" + prefix + "container {\n      position: absolute;\n      display: none;\n      bottom: 10px;\n      right: 15px;\n    }\n\n    #" + prefix + "close {\n      top: -10px;\n      right: -10px;\n      border: none;\n      width: 18px;\n      height: 18px;\n      color: #333333;\n      font-size: 16px;\n      cursor: pointer;\n      display: none;\n      position: absolute;\n      background: #ffffff;\n      border-radius: 100%;\n      align-items: center;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    #" + prefix + "container a {\n      color: inherit;\n      text-decoration: none;\n      width: 15px;\n      height: 23px;\n      overflow: hidden;\n\n      border-radius: 3px;\n      background: #fff;\n      color: #000;\n      font: initial;\n      cursor: pointer;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n      font-size: 14px;\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n      padding: 4px 2px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: flex;\n      transition: opacity 0.1s ease, bottom 0.1s ease, width 0.3s ease;\n      animation: " + prefix + "fade-in 0.1s ease-in-out;\n    }\n\n    #" + prefix + "icon-wrapper {\n      width: 140px;\n      height: 20px;\n      display: flex;\n      flex-shrink: 0;\n      align-items: center;\n      position: relative;\n    }\n\n    #" + prefix + "icon-wrapper svg {\n      flex-shrink: 0;\n      margin-right: 3px;\n    }\n\n    #" + prefix + "container a." + prefix + "expanded {\n      width: 135px;\n    }\n\n    #" + prefix + "container." + prefix + "visible {\n      display: flex;\n      bottom: 10px;\n      opacity: 1;\n    }\n\n    @keyframes " + prefix + "fade-in {\n      from {\n        bottom: 0px;\n        opacity: 0;\n      }\n      to {\n        bottom: 10px;\n        opacity: 1;\n      }\n    }\n  ";
  return css;
}

/***/ }),

/***/ "./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _hotDevClient = _interopRequireDefault(__webpack_require__(/*! ./error-overlay/hot-dev-client */ "./node_modules/next/dist/client/dev/error-overlay/hot-dev-client.js"));

var _default = function _default(_ref) {
  var assetPrefix = _ref.assetPrefix;
  var options = {
    path: assetPrefix + "/_next/webpack-hmr"
  };
  var devClient = (0, _hotDevClient["default"])(options);
  devClient.subscribeToHmrEvent(function (obj) {
    if (obj.action === 'reloadPage') {
      return window.location.reload();
    }

    if (obj.action === 'removedPage') {
      var _obj$data = _slicedToArray(obj.data, 1),
          page = _obj$data[0];

      if (page === window.next.router.pathname) {
        return window.location.reload();
      }

      return;
    }

    if (obj.action === 'addedPage') {
      var _obj$data2 = _slicedToArray(obj.data, 1),
          _page = _obj$data2[0];

      if (_page === window.next.router.pathname && typeof window.next.router.components[_page] === 'undefined') {
        return window.location.reload();
      }

      return;
    }

    throw new Error('Unexpected action ' + obj.action);
  });
  return devClient;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = initHeadManager;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : children.join('');
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://err.sh/next.js/next-head-count-missing');
      return;
    }
  }

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return function (head) {
    var promise = updatePromise = Promise.resolve().then(function () {
      if (promise !== updatePromise) return;
      updatePromise = null;
      var tags = {};
      head.forEach(function (h) {
        var components = tags[h.type] || [];
        components.push(h);
        tags[h.type] = components;
      });
      var titleComponent = tags.title ? tags.title[0] : null;
      var title = '';

      if (titleComponent) {
        var children = titleComponent.props.children;
        title = typeof children === 'string' ? children : children.join('');
      }

      if (title !== document.title) document.title = title;
      ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
        updateElements(type, tags[type] || []);
      });
    });
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var _router = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var envConfig = _interopRequireWildcard3(__webpack_require__(/*! ../next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _performanceRelayer = __webpack_require__(/*! ./performance-relayer */ "./node_modules/next/dist/client/performance-relayer.js");
/* global location */


if (!('finally' in Promise.prototype)) {
  // eslint-disable-next-line no-extend-native
  Promise.prototype["finally"] = __webpack_require__(/*! next/dist/build/polyfills/finally-polyfill.min */ "./node_modules/next/dist/build/polyfills/finally-polyfill.min.js");
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "9.3.5";
exports.version = version;
var props = data.props,
    err = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = prefix + "/_next/"; //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)();
var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref6 = _slicedToArray(_ref, 2),
      r = _ref6[0],
      f = _ref6[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  window.__NEXT_P.map(register);
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var updateHead = (0, _headManager["default"])();
var appElement = document.getElementById('__next');
var lastAppProps;
var webpackHMR;
var router;
exports.router = router;
var ErrorComponent;
var Component;
var App, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      this.props.fn(err, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();

      if (false) {} // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)


      if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || props.__N_SSG && location.search)) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + (0, _querystring.stringify)((0, _extends2["default"])({}, router.query, {}, (0, _querystring.parse)(location.search.substr(1)))), asPath, {
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }

      if (undefined) {
        window.__NEXT_HYDRATED = true;

        if (window.__NEXT_HYDRATED_CB) {
          window.__NEXT_HYDRATED_CB();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = function _default(_temp) {
  var _ref7, passedWebpackHMR, _await$pageLoader$loa, app, mod, initialErr, _await$pageLoader$loa2, _require, isValidElementType, renderCtx;

  return _regeneratorRuntime.async(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref7 = _temp === void 0 ? {} : _temp, passedWebpackHMR = _ref7.webpackHMR; // This makes sure this specific lines are removed in production

          if (true) {
            webpackHMR = passedWebpackHMR;
          }

          _context.next = 4;
          return _regeneratorRuntime.awrap(pageLoader.loadPageScript('/_app'));

        case 4:
          _await$pageLoader$loa = _context.sent;
          app = _await$pageLoader$loa.page;
          mod = _await$pageLoader$loa.mod;
          App = app;

          if (mod && mod.unstable_onPerformanceData) {
            onPerfEntry = function onPerfEntry(_ref2) {
              var name = _ref2.name,
                  startTime = _ref2.startTime,
                  value = _ref2.value,
                  duration = _ref2.duration,
                  entryType = _ref2.entryType;
              mod.unstable_onPerformanceData({
                name: name,
                startTime: startTime,
                value: value,
                duration: duration,
                entryType: entryType
              });
            };
          }

          initialErr = err;
          _context.prev = 10;
          ;
          _context.next = 14;
          return _regeneratorRuntime.awrap(pageLoader.loadPage(page));

        case 14:
          _await$pageLoader$loa2 = _context.sent;
          Component = _await$pageLoader$loa2.page;

          if (false) {}

          _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

          if (isValidElementType(Component)) {
            _context.next = 20;
            break;
          }

          throw new Error("The default export is not a React Component in page: \"" + page + "\"");

        case 20:
          _context.next = 25;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](10);
          // This catches errors like throwing in the top level of a module
          initialErr = _context.t0;

        case 25:
          if (!window.__NEXT_PRELOADREADY) {
            _context.next = 28;
            break;
          }

          _context.next = 28;
          return _regeneratorRuntime.awrap(window.__NEXT_PRELOADREADY(dynamicIds));

        case 28:
          exports.router = router = (0, _router.createRouter)(page, query, asPath, {
            initialProps: props,
            pageLoader: pageLoader,
            App: App,
            Component: Component,
            wrapApp: wrapApp,
            err: initialErr,
            isFallback: isFallback,
            subscription: function subscription(_ref3, App) {
              var Component = _ref3.Component,
                  props = _ref3.props,
                  err = _ref3.err;
              render({
                App: App,
                Component: Component,
                props: props,
                err: err
              });
            }
          }); // call init-client middleware

          if (false) {}

          renderCtx = {
            App: App,
            Component: Component,
            props: props,
            err: initialErr
          };

          if (true) {
            _context.next = 34;
            break;
          }

          render(renderCtx);
          return _context.abrupt("return", emitter);

        case 34:
          if (false) {}

          return _context.abrupt("return", {
            emitter: emitter,
            render: render,
            renderCtx: renderCtx
          });

        case 36:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[10, 22]], Promise);
};

exports["default"] = _default;

function render(props) {
  return _regeneratorRuntime.async(function render$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!props.err) {
            _context2.next = 4;
            break;
          }

          _context2.next = 3;
          return _regeneratorRuntime.awrap(renderError(props));

        case 3:
          return _context2.abrupt("return");

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return _regeneratorRuntime.awrap(doRender(props));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 13;
          return _regeneratorRuntime.awrap(renderError((0, _extends2["default"])({}, props, {
            err: _context2.t0
          })));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 9]], Promise);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function renderError(props) {
  var App, err, _await$pageLoader$loa3, AppTree, appCtx, initProps;

  return _regeneratorRuntime.async(function renderError$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          App = props.App, err = props.err; // In development runtime errors are caught by react-error-overlay
          // In production we catch runtime errors using componentDidCatch which will trigger renderError

          if (false) {}

          return _context3.abrupt("return", webpackHMR.reportRuntimeError(webpackHMR.prepareError(err)));

        case 3:
          if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


          console.error(err);
          _context3.next = 7;
          return _regeneratorRuntime.awrap(pageLoader.loadPage('/_error'));

        case 7:
          _await$pageLoader$loa3 = _context3.sent;
          ErrorComponent = _await$pageLoader$loa3.page;
          // In production we do a normal render with the `ErrorComponent` as component.
          // If we've gotten here upon initial render, we can use the props from the server.
          // Otherwise, we need to call `getInitialProps` on `App` before mounting.
          AppTree = wrapApp(App);
          appCtx = {
            Component: ErrorComponent,
            AppTree: AppTree,
            router: router,
            ctx: {
              err: err,
              pathname: page,
              query: query,
              asPath: asPath,
              AppTree: AppTree
            }
          };

          if (!props.props) {
            _context3.next = 15;
            break;
          }

          _context3.t0 = props.props;
          _context3.next = 18;
          break;

        case 15:
          _context3.next = 17;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(App, appCtx));

        case 17:
          _context3.t0 = _context3.sent;

        case 18:
          initProps = _context3.t0;
          _context3.next = 21;
          return _regeneratorRuntime.awrap(doRender((0, _extends2["default"])({}, props, {
            err: err,
            Component: ErrorComponent,
            props: initProps
          })));

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
} // If hydrate does not exist, eg in preact.


var isInitialRender = typeof _reactDom["default"].hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (isInitialRender) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }

  if (onPerfEntry && _utils.ST) {
    try {
      (0, _performanceRelayer.observeLayoutShift)(onPerfEntry);
      (0, _performanceRelayer.observeLargestContentfulPaint)(onPerfEntry);
      (0, _performanceRelayer.observePaint)(onPerfEntry);
    } catch (e) {
      window.addEventListener('load', function () {
        performance.getEntriesByType('paint').forEach(onPerfEntry);
      });
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    if (false) {}

    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
    performance.getEntriesByName('beforeRender').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref4) {
  var children = _ref4.children;
  return _react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: App,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, _react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router.makePublicRouterInstance)(router)
  }, _react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: updateHead
  }, children)));
}

var wrapApp = function wrapApp(App) {
  return function (props) {
    var appProps = (0, _extends2["default"])({}, props, {
      Component: Component,
      err: err,
      router: router
    });
    return _react["default"].createElement(AppContainer, null, _react["default"].createElement(App, appProps));
  };
};

function doRender(_ref5) {
  var App, Component, props, err, _router2, pathname, _query, _asPath, AppTree, appCtx, appProps, elem;

  return _regeneratorRuntime.async(function doRender$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          App = _ref5.App, Component = _ref5.Component, props = _ref5.props, err = _ref5.err; // Usual getInitialProps fetching is handled in next/router
          // this is for when ErrorComponent gets replaced by Component by HMR

          if (!(!props && Component && Component !== ErrorComponent && lastAppProps.Component === ErrorComponent)) {
            _context4.next = 8;
            break;
          }

          _router2 = router, pathname = _router2.pathname, _query = _router2.query, _asPath = _router2.asPath;
          AppTree = wrapApp(App);
          appCtx = {
            router: router,
            AppTree: AppTree,
            Component: ErrorComponent,
            ctx: {
              err: err,
              pathname: pathname,
              query: _query,
              asPath: _asPath,
              AppTree: AppTree
            }
          };
          _context4.next = 7;
          return _regeneratorRuntime.awrap((0, _utils.loadGetInitialProps)(App, appCtx));

        case 7:
          props = _context4.sent;

        case 8:
          Component = Component || lastAppProps.Component;
          props = props || lastAppProps.props;
          appProps = (0, _extends2["default"])({}, props, {
            Component: Component,
            err: err,
            router: router
          }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

          lastAppProps = appProps;
          emitter.emit('before-reactdom-render', {
            Component: Component,
            ErrorComponent: ErrorComponent,
            appProps: appProps
          });
          elem = _react["default"].createElement(AppContainer, null, _react["default"].createElement(App, appProps)); // We catch runtime errors using componentDidCatch which will trigger renderError

          renderReactElement( false ? undefined : elem, appElement);
          emitter.emit('after-reactdom-render', {
            Component: Component,
            ErrorComponent: ErrorComponent,
            appProps: appProps
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, null, Promise);
}

/***/ }),

/***/ "./node_modules/next/dist/client/next-dev.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/next-dev.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var next = _interopRequireWildcard(__webpack_require__(/*! ./ */ "./node_modules/next/dist/client/index.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./dev/event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _onDemandEntriesClient = _interopRequireDefault(__webpack_require__(/*! ./dev/on-demand-entries-client */ "./node_modules/next/dist/client/dev/on-demand-entries-client.js"));

var _webpackHotMiddlewareClient = _interopRequireDefault(__webpack_require__(/*! ./dev/webpack-hot-middleware-client */ "./node_modules/next/dist/client/dev/webpack-hot-middleware-client.js"));

var _devBuildWatcher = _interopRequireDefault(__webpack_require__(/*! ./dev/dev-build-watcher */ "./node_modules/next/dist/client/dev/dev-build-watcher.js"));

var _prerenderIndicator = _interopRequireDefault(__webpack_require__(/*! ./dev/prerender-indicator */ "./node_modules/next/dist/client/dev/prerender-indicator.js"));

var _fouc = __webpack_require__(/*! ./dev/fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals import('./dev/noop'); */


__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./dev/noop */ "./node_modules/next/dist/client/dev/noop.js", 7));
; // Support EventSource on Internet Explorer 11

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var _window = window,
    assetPrefix = _window.__NEXT_DATA__.assetPrefix;
var prefix = assetPrefix || '';
var webpackHMR = (0, _webpackHotMiddlewareClient["default"])({
  assetPrefix: prefix
});
window.next = next;
(0, next["default"])({
  webpackHMR: webpackHMR
}).then(function (_ref) {
  var emitter = _ref.emitter,
      renderCtx = _ref.renderCtx,
      render = _ref.render;
  (0, _onDemandEntriesClient["default"])({
    assetPrefix: prefix
  });
  if (true) (0, _devBuildWatcher["default"])();

  if ( true && // disable by default in electron
  !(typeof process !== 'undefined' && 'electron' in process.versions)) {
    (0, _prerenderIndicator["default"])();
  } // delay rendering until after styles have been applied in development


  (0, _fouc.displayContent)(function () {
    render(renderCtx);
  });
  var lastScroll;
  emitter.on('before-reactdom-render', function (_ref2) {
    var Component = _ref2.Component,
        ErrorComponent = _ref2.ErrorComponent; // Remember scroll when ErrorComponent is being rendered to later restore it

    if (!lastScroll && Component === ErrorComponent) {
      var _window2 = window,
          pageXOffset = _window2.pageXOffset,
          pageYOffset = _window2.pageYOffset;
      lastScroll = {
        x: pageXOffset,
        y: pageYOffset
      };
    }
  });
  emitter.on('after-reactdom-render', function (_ref3) {
    var Component = _ref3.Component,
        ErrorComponent = _ref3.ErrorComponent;

    if (lastScroll && Component !== ErrorComponent) {
      // Restore scroll after ErrorComponent was replaced with a page component by HMR
      var _lastScroll = lastScroll,
          x = _lastScroll.x,
          y = _lastScroll.y;
      window.scroll(x, y);
      lastScroll = null;
    }
  });
})["catch"](function (err) {
  console.error('Error was not caught', err);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/next/dist/client/page-loader.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/page-loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _isDynamic = __webpack_require__(/*! ./../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./../next-server/lib/router/utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./../next-server/lib/router/utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function hasRel(rel, link) {
  try {
    link = document.createElement('link');
    return link.relList.supports(rel);
  } catch (_unused) {}
}

var relPrefetch = hasRel('preload') && !hasRel('prefetch') ? // https://caniuse.com/#feat=link-rel-preload
// macOS and iOS (Safari does not support prefetch)
'preload' : // https://caniuse.com/#feat=link-rel-prefetch
// IE 11, Edge 12+, nearly all evergreen
'prefetch';
var hasNoModule = ('noModule' in document.createElement('script'));
/** @param {string} route */

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"" + route + "\"");
  }

  route = route.replace(/\/index$/, '/');
  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

function appendLink(href, rel, as) {
  return new Promise(function (res, rej, link) {
    link = document.createElement('link');
    link.crossOrigin = undefined;
    link.href = href;
    link.rel = rel;
    if (as) link.as = as;
    link.onload = res;
    link.onerror = rej;
    document.head.appendChild(link);
  });
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageRegisterEvents = (0, _mitt["default"])();
    this.loadingRoutes = {};

    if (false) {}
    /** @type {Promise<Set<string>>} */


    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  } // Returns a promise for the dependencies for a particular route


  _createClass(PageLoader, [{
    key: "getDependencies",
    value: function getDependencies(route) {
      var _this = this;

      return this.promisedBuildManifest.then(function (man) {
        return man[route] && man[route].map(function (url) {
          return _this.assetPrefix + "/_next/" + encodeURI(url);
        }) || [];
      });
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath) {
      var _this2 = this;

      var getHrefForSlug =
      /** @type string */
      function getHrefForSlug(path) {
        return _this2.assetPrefix + "/_next/data/" + _this2.buildId + (path === '/' ? '/index' : path) + ".json";
      };

      var _ref2 = (0, _url.parse)(href, true),
          hrefPathname = _ref2.pathname,
          query = _ref2.query;

      var _ref3 = (0, _url.parse)(asPath),
          asPathname = _ref3.pathname;

      var route = normalizeRoute(hrefPathname);
      var isDynamic = (0, _isDynamic.isDynamicRoute)(route),
          interpolatedRoute;

      if (isDynamic) {
        var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
        var dynamicGroups = dynamicRegex.groups;
        var dynamicMatches = // Try to match the dynamic route against the asPath
        (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        query;
        interpolatedRoute = route;

        if (!Object.keys(dynamicGroups).every(function (param) {
          var value = dynamicMatches[param];
          var repeat = dynamicGroups[param].repeat; // support single-level catch-all
          // TODO: more robust handling for user-error (passing `/`)

          if (repeat && !Array.isArray(value)) value = [value];
          return param in dynamicMatches && ( // Interpolate group into data URL if present
          interpolatedRoute = interpolatedRoute.replace("[" + (repeat ? '...' : '') + param + "]", repeat ? value.map(encodeURIComponent).join('/') : encodeURIComponent(value)));
        })) {
          interpolatedRoute = ''; // did not satisfy all requirements
          // n.b. We ignore this error because we handle warning for this case in
          // development in the `<Link>` component directly.
        }
      }

      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "prefetchData",
    value: function prefetchData(href, asPath) {
      var _this3 = this;

      var _ref4 = (0, _url.parse)(href, true),
          hrefPathname = _ref4.pathname;

      var route = normalizeRoute(hrefPathname);
      return this.promisedSsgManifest.then(function (s, _dataHref) {
        return (// Check if the route requires a data file
          s.has(route) && ( // Try to generate data href, noop when falsy
          _dataHref = _this3.getDataHref(href, asPath)) && // noop when data has already been prefetched (dedupe)
          !document.querySelector("link[rel=\"" + relPrefetch + "\"][href^=\"" + _dataHref + "\"]") && // Inject the `<link rel=prefetch>` tag for above computed `href`.
          appendLink(_dataHref, relPrefetch, 'fetch')
        );
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.loadPageScript(route);
    }
  }, {
    key: "loadPageScript",
    value: function loadPageScript(route) {
      var _this4 = this;

      route = normalizeRoute(route);
      return new Promise(function (resolve, reject) {
        var fire = function fire(_ref) {
          var error = _ref.error,
              page = _ref.page,
              mod = _ref.mod;

          _this4.pageRegisterEvents.off(route, fire);

          delete _this4.loadingRoutes[route];

          if (error) {
            reject(error);
          } else {
            resolve({
              page: page,
              mod: mod
            });
          }
        }; // If there's a cached version of the page, let's use it.


        var cachedPage = _this4.pageCache[route];

        if (cachedPage) {
          var error = cachedPage.error,
              page = cachedPage.page,
              mod = cachedPage.mod;
          error ? reject(error) : resolve({
            page: page,
            mod: mod
          });
          return;
        } // Register a listener to get the page


        _this4.pageRegisterEvents.on(route, fire); // If the page is loading via SSR, we need to wait for it
        // rather downloading it again.


        if (document.querySelector("script[data-next-page=\"" + route + "\"]")) {
          return;
        }

        if (!_this4.loadingRoutes[route]) {
          _this4.loadingRoutes[route] = true;

          if (false) {} else {
            _this4.loadRoute(route);
          }
        }
      });
    }
  }, {
    key: "loadRoute",
    value: function loadRoute(route) {
      route = normalizeRoute(route);
      var scriptRoute = route === '/' ? '/index.js' : route + ".js";
      var url = this.assetPrefix + "/_next/static/" + encodeURIComponent(this.buildId) + "/pages" + encodeURI(scriptRoute);
      this.loadScript(url, route, true);
    }
  }, {
    key: "loadScript",
    value: function loadScript(url, route, isPage) {
      var _this5 = this;

      var script = document.createElement('script');

      if (false) {}

      script.crossOrigin = undefined;
      script.src = url;

      script.onerror = function () {
        var error = new Error("Error loading script " + url);
        error.code = 'PAGE_LOAD_ERROR';

        _this5.pageRegisterEvents.emit(route, {
          error: error
        });
      };

      document.body.appendChild(script);
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this6 = this;

      var register = function register() {
        try {
          var mod = regFn();
          var pageData = {
            page: mod["default"] || mod,
            mod: mod
          };
          _this6.pageCache[route] = pageData;

          _this6.pageRegisterEvents.emit(route, pageData);
        } catch (error) {
          _this6.pageCache[route] = {
            error: error
          };

          _this6.pageRegisterEvents.emit(route, {
            error: error
          });
        }
      };

      if (true) {
        // Wait for webpack to become idle if it's not.
        // More info: https://github.com/zeit/next.js/pull/1511
        if ( true && module.hot.status() !== 'idle') {
          console.log("Waiting for webpack to become \"idle\" to initialize the page: \"" + route + "\"");

          var check = function check(status) {
            if (status === 'idle') {
              module.hot.removeStatusHandler(check);
              register();
            }
          };

          module.hot.status(check);
          return;
        }
      }

      register();
    }
    /**
    * @param {string} route
    * @param {boolean} [isDependency]
    */

  }, {
    key: "prefetch",
    value: function prefetch(route, isDependency) {
      var _this7 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }
      /** @type {string} */


      var url;

      if (isDependency) {
        url = route;
      } else {
        route = normalizeRoute(route);
        var scriptRoute = (route === '/' ? '/index' : route) + ".js";

        if (false) {}

        url = this.assetPrefix + "/_next/static/" + encodeURIComponent(this.buildId) + "/pages" + encodeURI(scriptRoute);
      }

      return Promise.all(document.querySelector("link[rel=\"" + relPrefetch + "\"][href^=\"" + url + "\"], script[data-next-page=\"" + route + "\"]") ? [] : [appendLink(url, relPrefetch, url.match(/\.css$/) ? 'style' : 'script'),  false && false]).then( // do not return any data
      function () {}, // swallow prefetch errors
      function () {});
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

/***/ }),

/***/ "./node_modules/next/dist/client/performance-relayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/client/performance-relayer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.observeLayoutShift = observeLayoutShift;
exports.observeLargestContentfulPaint = observeLargestContentfulPaint;
exports.observePaint = observePaint;

function isTypeSupported(type) {
  if (self.PerformanceObserver && PerformanceObserver.supportedEntryTypes) {
    return PerformanceObserver.supportedEntryTypes.includes(type);
  }

  return false;
}

function observeLayoutShift(onPerfEntry) {
  if (isTypeSupported('layout-shift')) {
    var cumulativeScore = 0;
    var observer = new PerformanceObserver(function (list) {
      var _iterator = _createForOfIteratorHelper(list.getEntries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          // Only count layout shifts without recent user input.
          if (!entry.hadRecentInput) {
            cumulativeScore += entry.value;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    observer.observe({
      type: 'layout-shift',
      buffered: true
    });
    document.addEventListener('visibilitychange', function clsObserver() {
      if (document.visibilityState === 'hidden') {
        // Force any pending records to be dispatched.
        observer.takeRecords();
        observer.disconnect();
        document.removeEventListener('visibilitychange', clsObserver, true);
        onPerfEntry({
          name: 'cumulative-layout-shift',
          value: cumulativeScore
        });
      }
    }, true);
  }
}

function observeLargestContentfulPaint(onPerfEntry) {
  if (isTypeSupported('largest-contentful-paint')) {
    // Create a variable to hold the latest LCP value (since it can change).
    var lcp; // Create the PerformanceObserver instance.

    var observer = new PerformanceObserver(function (entryList) {
      var entries = entryList.getEntries();
      var lastEntry = entries[entries.length - 1];
      lcp = lastEntry.renderTime || lastEntry.loadTime;
    });
    observer.observe({
      type: 'largest-contentful-paint',
      buffered: true
    });
    document.addEventListener('visibilitychange', function lcpObserver() {
      if (lcp && document.visibilityState === 'hidden') {
        document.removeEventListener('visibilitychange', lcpObserver, true);
        onPerfEntry({
          name: 'largest-contentful-paint',
          value: lcp
        });
      }
    }, true);
  }
}

function observePaint(onPerfEntry) {
  var observer = new PerformanceObserver(function (list) {
    list.getEntries().forEach(onPerfEntry);
  });
  observer.observe({
    type: 'paint',
    buffered: true
  });
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/react-error-overlay/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/compiled/react-error-overlay/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){e.exports=n(9)},function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,r=/^data:.+\,.+$/;function u(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function o(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function i(e){var n=e,r=u(e);if(r){if(!r.path)return e;n=r.path}for(var i,a=t.isAbsolute(n),l=n.split(/\/+/),s=0,c=l.length-1;c>=0;c--)"."===(i=l[c])?l.splice(c,1):".."===i?s++:s>0&&(""===i?(l.splice(c+1,s),s=0):(l.splice(c,2),s--));return""===(n=l.join("/"))&&(n=a?"/":"."),r?(r.path=n,o(r)):n}t.urlParse=u,t.urlGenerate=o,t.normalize=i,t.join=function(e,t){""===e&&(e="."),""===t&&(t=".");var n=u(t),a=u(e);if(a&&(e=a.path||"/"),n&&!n.scheme)return a&&(n.scheme=a.scheme),o(n);if(n||t.match(r))return t;if(a&&!a.host&&!a.path)return a.host=t,o(a);var l="/"===t.charAt(0)?t:i(e.replace(/\/+$/,"")+"/"+t);return a?(a.path=l,o(a)):l},t.isAbsolute=function(e){return"/"===e.charAt(0)||!!e.match(n)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var a=!("__proto__"in Object.create(null));function l(e){return e}function s(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function c(e,t){return e===t?0:e>t?1:-1}t.toSetString=a?l:function(e){return s(e)?"$"+e:e},t.fromSetString=a?l:function(e){return s(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=e.source-t.source;return 0!==r?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)||n?r:0!=(r=e.generatedColumn-t.generatedColumn)?r:0!=(r=e.generatedLine-t.generatedLine)?r:e.name-t.name},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r?r:0!=(r=e.generatedColumn-t.generatedColumn)||n?r:0!=(r=e.source-t.source)?r:0!=(r=e.originalLine-t.originalLine)?r:0!=(r=e.originalColumn-t.originalColumn)?r:e.name-t.name},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n?n:0!=(n=e.generatedColumn-t.generatedColumn)?n:0!==(n=c(e.source,t.source))?n:0!=(n=e.originalLine-t.originalLine)?n:0!=(n=e.originalColumn-t.originalColumn)?n:c(e.name,t.name)}},function(e,t){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var u=e[r];"."===u?e.splice(r,1):".."===u?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return r.exec(e).slice(1)};function o(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var u=r>=0?arguments[r]:process.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(e=u+"/"+e,t="/"===u.charAt(0))}return(t?"/":"")+(e=n(o(e.split("/"),function(e){return!!e}),!t).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),u="/"===i(e,-1);return(e=n(o(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&u&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var u=r(e.split("/")),o=r(n.split("/")),i=Math.min(u.length,o.length),a=i,l=0;l<i;l++)if(u[l]!==o[l]){a=l;break}var s=[];for(l=a;l<u.length;l++)s.push("..");return(s=s.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=u(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=u(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return u(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}},function(e,t,n){t.SourceMapGenerator=n(4).SourceMapGenerator,t.SourceMapConsumer=n(12).SourceMapConsumer,t.SourceNode=n(15).SourceNode},function(e,t,n){var r=n(5),u=n(1),o=n(6).ArraySet,i=n(11).MappingList;function a(e){e||(e={}),this._file=u.getArg(e,"file",null),this._sourceRoot=u.getArg(e,"sourceRoot",null),this._skipValidation=u.getArg(e,"skipValidation",!1),this._sources=new o,this._names=new o,this._mappings=new i,this._sourcesContents=null}a.prototype._version=3,a.fromSourceMap=function(e){var t=e.sourceRoot,n=new a({file:e.file,sourceRoot:t});return e.eachMapping(function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=u.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)}),e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&n.setSourceContent(t,r)}),n},a.prototype.addMapping=function(e){var t=u.getArg(e,"generated"),n=u.getArg(e,"original",null),r=u.getArg(e,"source",null),o=u.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,o),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=o&&(o=String(o),this._names.has(o)||this._names.add(o)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:o})},a.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=u.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[u.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[u.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},a.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=u.relative(i,r));var a=new o,l=new o;this._mappings.unsortedForEach(function(t){if(t.source===r&&null!=t.originalLine){var o=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=o.source&&(t.source=o.source,null!=n&&(t.source=u.join(n,t.source)),null!=i&&(t.source=u.relative(i,t.source)),t.originalLine=o.line,t.originalColumn=o.column,null!=o.name&&(t.name=o.name))}var s=t.source;null==s||a.has(s)||a.add(s);var c=t.name;null==c||l.has(c)||l.add(c)},this),this._sources=a,this._names=l,e.sources.forEach(function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=u.join(n,t)),null!=i&&(t=u.relative(i,t)),this.setSourceContent(t,r))},this)},a.prototype._validateMapping=function(e,t,n,r){if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},a.prototype._serializeMappings=function(){for(var e,t,n,o,i=0,a=1,l=0,s=0,c=0,f=0,p="",d=this._mappings.toArray(),h=0,m=d.length;h<m;h++){if(e="",(t=d[h]).generatedLine!==a)for(i=0;t.generatedLine!==a;)e+=";",a++;else if(h>0){if(!u.compareByGeneratedPositionsInflated(t,d[h-1]))continue;e+=","}e+=r.encode(t.generatedColumn-i),i=t.generatedColumn,null!=t.source&&(o=this._sources.indexOf(t.source),e+=r.encode(o-f),f=o,e+=r.encode(t.originalLine-1-s),s=t.originalLine-1,e+=r.encode(t.originalColumn-l),l=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=r.encode(n-c),c=n)),p+=e}return p},a.prototype._generateSourcesContent=function(e,t){return e.map(function(e){if(!this._sourcesContents)return null;null!=t&&(e=u.relative(t,e));var n=u.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},a.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},a.prototype.toString=function(){return JSON.stringify(this.toJSON())},t.SourceMapGenerator=a},function(e,t,n){var r=n(10);t.encode=function(e){var t,n="",u=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&u,(u>>>=5)>0&&(t|=32),n+=r.encode(t)}while(u>0);return n},t.decode=function(e,t,n){var u,o,i,a,l=e.length,s=0,c=0;do{if(t>=l)throw new Error("Expected more digits in base 64 VLQ value.");if(-1===(o=r.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1));u=!!(32&o),s+=(o&=31)<<c,c+=5}while(u);n.value=(a=(i=s)>>1,1==(1&i)?-a:a),n.rest=t}},function(e,t,n){var r=n(1),u=Object.prototype.hasOwnProperty;function o(){this._array=[],this._set=Object.create(null)}o.fromArray=function(e,t){for(var n=new o,r=0,u=e.length;r<u;r++)n.add(e[r],t);return n},o.prototype.size=function(){return Object.getOwnPropertyNames(this._set).length},o.prototype.add=function(e,t){var n=r.toSetString(e),o=u.call(this._set,n),i=this._array.length;o&&!t||this._array.push(e),o||(this._set[n]=i)},o.prototype.has=function(e){var t=r.toSetString(e);return u.call(this._set,t)},o.prototype.indexOf=function(e){var t=r.toSetString(e);if(u.call(this._set,t))return this._set[t];throw new Error('"'+e+'" is not in the set.')},o.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},o.prototype.toArray=function(){return this._array.slice()},t.ArraySet=o},function(e,t,n){"use strict";function r(e){return Array.isArray(e)||(e=[e]),Promise.all(e.map(function(e){return e.then(function(e){return{isFulfilled:!0,isRejected:!1,value:e}}).catch(function(e){return{isFulfilled:!1,isRejected:!0,reason:e}})}))}Object.defineProperty(t,"__esModule",{value:!0}),t.settle=r,t.default=r},function(e,t){e.exports='!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=202)}([function(e,t,n){"use strict";e.exports=n(178)},function(e,t,n){var r=n(5),u=n(34).f,o=n(17),i=n(21),a=n(38),l=n(58),c=n(54);e.exports=function(e,t){var n,s,f,d,p,h=e.target,m=e.global,g=e.stat;if(n=m?r:g?r[h]||a(h,{}):(r[h]||{}).prototype)for(s in t){if(d=t[s],f=e.noTargetGet?(p=u(n,s))&&p.value:n[s],!c(m?s:h+(g?".":"#")+s,e.forced)&&void 0!==f){if(typeof d===typeof f)continue;l(d,f)}(e.sham||f&&f.sham)&&o(d,"sham",!0),i(n,s,d,e)}}},function(e,t,n){var r=n(10);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){e.exports=!1},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t){e.exports="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")()},function(e,t,n){var r=n(24)("wks"),u=n(30),o=n(5).Symbol,i=n(62);e.exports=function(e){return r[e]||(r[e]=i&&o[e]||(i?o:u)("Symbol."+e))}},function(e,t,n){var r=n(4);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,u){return e.call(t,n,r,u)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(71),u=n(11),o=n(77),i=n(13).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});u(t,e)||i(t,e,{value:o.f(e)})}},function(e,t,n){var r=n(2),u=n(61),o=n(31),i=n(7),a=n(43),l=n(64),c={};(e.exports=function(e,t,n,s,f){var d,p,h,m,g,v=i(t,n,s?2:1);if(f)d=e;else{if("function"!=typeof(p=a(e)))throw TypeError("Target is not iterable");if(u(p)){for(h=0,m=o(e.length);m>h;h++)if((s?v(r(g=e[h])[0],g[1]):v(e[h]))===c)return c;return}d=p.call(e)}for(;!(g=d.next()).done;)if(l(d,v,g.value,s)===c)return c}).BREAK=c},function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(16),u=n(55),o=n(2),i=n(28),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=i(t,!0),o(n),u)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(71),u=n(5),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(u[e]):r[e]&&r[e][t]||u[e]&&u[e][t]}},function(e,t,n){var r=n(3),u=n(47);e.exports=r?u:function(e){return Map.prototype.entries.call(e)}},function(e,t,n){e.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(13),u=n(23);e.exports=n(16)?function(e,t,n){return r.f(e,t,u(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(2),u=n(4),o=n(6)("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[o])?t:u(n)}},function(e,t,n){var r=n(3),u=n(47);e.exports=r?u:function(e){return Set.prototype.values.call(e)}},function(e,t,n){var r=n(87),u=n(37);e.exports=function(e){return r(u(e))}},function(e,t,n){var r=n(5),u=n(17),o=n(11),i=n(38),a=n(57),l=n(25),c=l.get,s=l.enforce,f=String(a).split("toString");n(24)("inspectSource",function(e){return a.call(e)}),(e.exports=function(e,t,n,a){var l=!!a&&!!a.unsafe,c=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||u(n,"name",t),s(n).source=f.join("string"==typeof t?t:"")),e!==r?(l?!d&&e[t]&&(c=!0):delete e[t],c?e[t]=n:u(e,t,n)):c?e[t]=n:i(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&c(this).source||a.call(this)})},function(e,t,n){var r=n(13).f,u=n(11),o=n(6)("toStringTag");e.exports=function(e,t,n){e&&!u(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(5),u=n(38),o=r["__core-js_shared__"]||u("__core-js_shared__",{});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.0.1",mode:n(3)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,n){var r,u,o,i=n(88),a=n(10),l=n(17),c=n(11),s=n(29),f=n(26),d=n(5).WeakMap;if(i){var p=new d,h=p.get,m=p.has,g=p.set;r=function(e,t){return g.call(p,e,t),t},u=function(e){return h.call(p,e)||{}},o=function(e){return m.call(p,e)}}else{var v=s("state");f[v]=!0,r=function(e,t){return l(e,v,t),t},u=function(e){return c(e,v)?e[v]:{}},o=function(e){return c(e,v)}}e.exports={set:r,get:u,has:o,enforce:function(e){return o(e)?u(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!a(t)||(n=u(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t){e.exports={}},function(e,t){e.exports={}},function(e,t,n){var r=n(10);e.exports=function(e,t){if(!r(e))return e;var n,u;if(t&&"function"==typeof(n=e.toString)&&!r(u=n.call(e)))return u;if("function"==typeof(n=e.valueOf)&&!r(u=n.call(e)))return u;if(!t&&"function"==typeof(n=e.toString)&&!r(u=n.call(e)))return u;throw TypeError("Can\'t convert object to primitive value")}},function(e,t,n){var r=n(24)("keys"),u=n(30);e.exports=function(e){return r[e]||(r[e]=u(e))}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(40),u=Math.min;e.exports=function(e){return e>0?u(r(e),9007199254740991):0}},function(e,t,n){var r=n(2),u=n(95),o=n(41),i=n(96),a=n(56),l=n(29)("IE_PROTO"),c=function(){},s=function(){var e,t=a("iframe"),n=o.length;for(t.style.display="none",i.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\\/script>"),e.close(),s=e.F;n--;)delete s.prototype[o[n]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(c.prototype=r(e),n=new c,c.prototype=null,n[l]=e):n=s(),void 0===t?n:u(n,t)},n(26)[l]=!0},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0}return r(e,null,[{key:"escapeForHtml",value:function(t){return(new e).escapeForHtml(t)}},{key:"linkify",value:function(t){return(new e).linkify(t)}},{key:"ansiToHtml",value:function(t,n){return(new e).ansiToHtml(t,n)}},{key:"ansiToJson",value:function(t,n){return(new e).ansiToJson(t,n)}},{key:"ansiToText",value:function(t){return(new e).ansiToText(t)}}]),r(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(u[e][t].color);for(var n=[0,95,135,175,215,255],r=function(e,t,r){return n[e]+", "+n[t]+", "+n[r]},o=0;o<6;++o)for(var i=0;i<6;++i)for(var a=0;a<6;++a)this.PALETTE_COLORS.push(r(o,i,a));for(var l=8,c=0;c<24;++c,l+=10)this.PALETTE_COLORS.push(r(l,l,l))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>]/gm,function(e){return"&"==e?"&amp;":"<"==e?"&lt;":">"==e?"&gt;":""})}},{key:"linkify",value:function(e){return e.replace(/(https?:\\/\\/[^\\s]+)/gm,function(e){return\'<a href="\'+e+\'">\'+e+"</a>"})}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,n){var r=this,u=e.split(/\\033\\[/),o=u.shift();void 0!==t&&null!==t||(t={}),t.clearLine=/\\r/.test(e);var i=u.map(function(e){return r.processChunk(e,t,n)});if(t&&t.json){var a=this.processChunkJson("");return a.content=o,a.clearLine=t.clearLine,i.unshift(a),t.remove_empty&&(i=i.filter(function(e){return!e.isEmpty()})),i}return i.unshift(o),i.join("")}},{key:"processChunkJson",value:function(e,t,n){var r=(t="undefined"==typeof t?{}:t).use_classes="undefined"!=typeof t.use_classes&&t.use_classes,o=t.key=r?"class":"color",i={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,clearLine:t.clearLine,decoration:null,was_processed:!1,isEmpty:function(){return!i.content}},a=e.match(/^([!\\x3c-\\x3f]*)([\\d;]*)([\\x20-\\x2c]*[\\x40-\\x7e])([\\s\\S]*)/m);if(!a)return i;i.content=a[4];var l=a[2].split(";");if(""!==a[1]||"m"!==a[3])return i;if(!n)return i;for(this.decoration=null;l.length>0;){var c=l.shift(),s=parseInt(c);if(isNaN(s)||0===s)this.fg=this.bg=this.decoration=null;else if(1===s)this.decoration="bold";else if(2===s)this.decoration="dim";else if(3==s)this.decoration="italic";else if(4==s)this.decoration="underline";else if(5==s)this.decoration="blink";else if(7===s)this.decoration="reverse";else if(8===s)this.decoration="hidden";else if(9===s)this.decoration="strikethrough";else if(39==s)this.fg=null;else if(49==s)this.bg=null;else if(s>=30&&s<38)this.fg=u[0][s%10][o];else if(s>=90&&s<98)this.fg=u[1][s%10][o];else if(s>=40&&s<48)this.bg=u[0][s%10][o];else if(s>=100&&s<108)this.bg=u[1][s%10][o];else if(38===s||48===s){var f=38===s;if(l.length>=1){var d=l.shift();if("5"===d&&l.length>=1){var p=parseInt(l.shift());if(p>=0&&p<=255)if(r){var h=p>=16?"ansi-palette-"+p:u[p>7?1:0][p%8].class;f?this.fg=h:this.bg=h}else this.PALETTE_COLORS||this.setupPalette(),f?this.fg=this.PALETTE_COLORS[p]:this.bg=this.PALETTE_COLORS[p]}else if("2"===d&&l.length>=3){var m=parseInt(l.shift()),g=parseInt(l.shift()),v=parseInt(l.shift());if(m>=0&&m<=255&&g>=0&&g<=255&&v>=0&&v<=255){var y=m+", "+g+", "+v;r?f?(this.fg="ansi-truecolor",this.fg_truecolor=y):(this.bg="ansi-truecolor",this.bg_truecolor=y):f?this.fg=y:this.bg=y}}}}}if(null===this.fg&&null===this.bg&&null===this.decoration)return i;return i.fg=this.fg,i.bg=this.bg,i.fg_truecolor=this.fg_truecolor,i.bg_truecolor=this.bg_truecolor,i.decoration=this.decoration,i.was_processed=!0,i}},{key:"processChunk",value:function(e,t,n){var r=this;t=t||{};var u=this.processChunkJson(e,t,n);if(t.json)return u;if(u.isEmpty())return"";if(!u.was_processed)return u.content;var o=t.use_classes,i=[],a=[],l={},c=function(e){var t=[],n=void 0;for(n in e)e.hasOwnProperty(n)&&t.push("data-"+n+\'="\'+r.escapeForHtml(e[n])+\'"\');return t.length>0?" "+t.join(" "):""};return u.fg&&(o?(a.push(u.fg+"-fg"),null!==u.fg_truecolor&&(l["ansi-truecolor-fg"]=u.fg_truecolor,u.fg_truecolor=null)):i.push("color:rgb("+u.fg+")")),u.bg&&(o?(a.push(u.bg+"-bg"),null!==u.bg_truecolor&&(l["ansi-truecolor-bg"]=u.bg_truecolor,u.bg_truecolor=null)):i.push("background-color:rgb("+u.bg+")")),u.decoration&&(o?a.push("ansi-"+u.decoration):"bold"===u.decoration?i.push("font-weight:bold"):"dim"===u.decoration?i.push("opacity:0.5"):"italic"===u.decoration?i.push("font-style:italic"):"reverse"===u.decoration?i.push("filter:invert(100%)"):"hidden"===u.decoration?i.push("visibility:hidden"):"strikethrough"===u.decoration?i.push("text-decoration:line-through"):i.push("text-decoration:"+u.decoration)),o?\'<span class="\'+a.join(" ")+\'"\'+c(l)+">"+u.content+"</span>":\'<span style="\'+i.join(";")+\'"\'+c(l)+">"+u.content+"</span>"}}]),e}();e.exports=o},function(e,t,n){var r=n(16),u=n(35),o=n(23),i=n(20),a=n(28),l=n(11),c=n(55),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=i(e),t=a(t,!0),c)try{return s(e,t)}catch(e){}if(l(e,t))return o(!u.f.call(e,t),e[t])}},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,o=u&&!r.call({1:2},1);t.f=o?function(e){var t=u(this,e);return!!t&&t.enumerable}:r},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can\'t call method on "+e);return e}},function(e,t,n){var r=n(5),u=n(17);e.exports=function(e,t){try{u(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(59),u=n(41).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,u)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(63),u=n(6)("iterator"),o=n(27);e.exports=function(e){if(void 0!=e)return e[u]||e["@@iterator"]||o[r(e)]}},function(e,t,n){var r=n(59),u=n(41);e.exports=Object.keys||function(e){return r(e,u)}},function(e,t,n){"use strict";var r=n(1),u=n(98),o=n(70),i=n(67),a=n(22),l=n(17),c=n(21),s=n(3),f=n(6)("iterator"),d=n(27),p=n(69),h=p.IteratorPrototype,m=p.BUGGY_SAFARI_ITERATORS,g=function(){return this};e.exports=function(e,t,n,p,v,y,D){u(n,t,p);var b,A,C,E=function(e){if(e===v&&k)return k;if(!m&&e in x)return x[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},F=t+" Iterator",w=!1,x=e.prototype,B=x[f]||x["@@iterator"]||v&&x[v],k=!m&&B||E(v),S="Array"==t&&x.entries||B;if(S&&(b=o(S.call(new e)),h!==Object.prototype&&b.next&&(s||o(b)===h||(i?i(b,h):"function"!=typeof b[f]&&l(b,f,g)),a(b,F,!0,!0),s&&(d[F]=g))),"values"==v&&B&&"values"!==B.name&&(w=!0,k=function(){return B.call(this)}),s&&!D||x[f]===k||l(x,f,k),d[t]=k,v)if(A={values:E("values"),keys:y?k:E("keys"),entries:E("entries")},D)for(C in A)!m&&!w&&C in x||c(x,C,A[C]);else r({target:t,proto:!0,forced:m||w},A);return A}},function(e,t,n){var r=n(37);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(2),u=n(43);e.exports=function(e){var t=u(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},function(e,t,n){var r=n(36);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))u.call(n,c)&&(a[c]=n[c]);if(r){i=r(n);for(var s=0;s<i.length;s++)o.call(n,i[s])&&(a[i[s]]=n[i[s]])}}return a}},function(e,t){var n,r,u=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,c=[],s=!1,f=-1;function d(){s&&l&&(s=!1,l.length?c=l.concat(c):f=-1,c.length&&p())}function p(){if(!s){var e=a(d);s=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||s||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=m,u.addListener=m,u.once=m,u.off=m,u.removeListener=m,u.removeAllListeners=m,u.emit=m,u.prependListener=m,u.prependOnceListener=m,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t,n){"use strict";!function e(){if("undefined"!==typeof{}&&"function"===typeof{}.checkDCE)try{({}).checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(179)},function(e,t,n){"use strict";var r=n(5),u=n(54),o=n(1),i=n(21),a=n(60),l=n(9),c=n(65),s=n(10),f=n(12),d=n(66),p=n(22),h=n(93);e.exports=function(e,t,n,m,g){var v=r[e],y=v&&v.prototype,D=v,b=m?"set":"add",A={},C=function(e){var t=y[e];i(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!s(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!s(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!s(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(u(e,"function"!=typeof v||!(g||y.forEach&&!f(function(){(new v).entries().next()}))))D=n.getConstructor(t,e,m,b),a.REQUIRED=!0;else if(u(e,!0)){var E=new D,F=E[b](g?{}:-0,1)!=E,w=f(function(){E.has(1)}),x=d(function(e){new v(e)}),B=!g&&f(function(){for(var e=new v,t=5;t--;)e[b](t,t);return!e.has(-0)});x||((D=t(function(t,n){c(t,D,e);var r=h(new v,t,D);return void 0!=n&&l(n,r[b],r,m),r})).prototype=y,y.constructor=D),(w||B)&&(C("delete"),C("has"),m&&C("get")),(B||F)&&C(b),g&&y.clear&&delete y.clear}return A[e]=D,o({global:!0,forced:D!=v},A),p(D,e),g||n.setStrong(D,e,m),D}},function(e,t,n){var r=n(12),u=/#|\\.prototype\\./,o=function(e,t){var n=a[i(e)];return n==c||n!=l&&("function"==typeof t?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(u,".").toLowerCase()},a=o.data={},l=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},function(e,t,n){e.exports=!n(16)&&!n(12)(function(){return 7!=Object.defineProperty(n(56)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(10),u=n(5).document,o=r(u)&&r(u.createElement);e.exports=function(e){return o?u.createElement(e):{}}},function(e,t,n){e.exports=n(24)("native-function-to-string",Function.toString)},function(e,t,n){var r=n(11),u=n(89),o=n(34),i=n(13);e.exports=function(e,t){for(var n=u(t),a=i.f,l=o.f,c=0;c<n.length;c++){var s=n[c];r(e,s)||a(e,s,l(t,s))}}},function(e,t,n){var r=n(11),u=n(20),o=n(90)(!1),i=n(26);e.exports=function(e,t){var n,a=u(e),l=0,c=[];for(n in a)!r(i,n)&&r(a,n)&&c.push(n);for(;t.length>l;)r(a,n=t[l++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(30)("meta"),u=n(92),o=n(10),i=n(11),a=n(13).f,l=0,c=Object.isExtensible||function(){return!0},s=function(e){a(e,r,{value:{objectID:"O"+ ++l,weakData:{}}})},f=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!c(e))return"F";if(!t)return"E";s(e)}return e[r].objectID},getWeakData:function(e,t){if(!i(e,r)){if(!c(e))return!0;if(!t)return!1;s(e)}return e[r].weakData},onFreeze:function(e){return u&&f.REQUIRED&&c(e)&&!i(e,r)&&s(e),e}};n(26)[r]=!0},function(e,t,n){var r=n(27),u=n(6)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[u]===e)}},function(e,t,n){e.exports=!n(12)(function(){return!String(Symbol())})},function(e,t,n){var r=n(36),u=n(6)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),u))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},function(e,t,n){var r=n(2);e.exports=function(e,t,n,u){try{return u?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},function(e,t,n){var r=n(6)("iterator"),u=!1;try{var o=0,i={next:function(){return{done:!!o++}},return:function(){u=!0}};i[r]=function(){return this},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!u)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){}return n}},function(e,t,n){var r=n(94);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,u){return r(n,u),t?e.call(n,u):n.__proto__=u,n}}():void 0)},function(e,t,n){"use strict";var r=n(13).f,u=n(32),o=n(97),i=n(7),a=n(65),l=n(9),c=n(45),s=n(100),f=n(16),d=n(60).fastKey,p=n(25),h=p.set,m=p.getterFor;e.exports={getConstructor:function(e,t,n,c){var s=e(function(e,r){a(e,s,t),h(e,{type:t,index:u(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=r&&l(r,e[c],e,n)}),p=m(t),g=function(e,t,n){var r,u,o=p(e),i=v(e,t);return i?i.value=n:(o.last=i={index:u=d(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=i),r&&(r.next=i),f?o.size++:e.size++,"F"!==u&&(o.index[u]=i)),e},v=function(e,t){var n,r=p(e),u=d(t);if("F"!==u)return r.index[u];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(s.prototype,{clear:function(){for(var e=p(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=p(this),n=v(this,e);if(n){var r=n.next,u=n.previous;delete t.index[n.index],n.removed=!0,u&&(u.next=r),r&&(r.previous=u),t.first==n&&(t.first=r),t.last==n&&(t.last=u),f?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=p(this),r=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!v(this,e)}}),o(s.prototype,n?{get:function(e){var t=v(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),f&&r(s.prototype,"size",{get:function(){return p(this).size}}),s},setStrong:function(e,t,n){var r=t+" Iterator",u=m(t),o=m(r);c(e,t,function(e,t){h(this,{type:r,target:e,state:u(e),kind:t,last:void 0})},function(){for(var e=o(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})},n?"entries":"values",!n,!0),s(t)}}},function(e,t,n){"use strict";var r,u,o,i=n(70),a=n(17),l=n(11),c=n(3),s=n(6)("iterator"),f=!1;[].keys&&("next"in(o=[].keys())?(u=i(i(o)))!==Object.prototype&&(r=u):f=!0),void 0==r&&(r={}),c||l(r,s)||a(r,s,function(){return this}),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},function(e,t,n){var r=n(11),u=n(46),o=n(29)("IE_PROTO"),i=n(99),a=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=u(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){e.exports=n(5)},function(e,t,n){var r=n(101),u=Object.prototype;r!==u.toString&&n(21)(u,"toString",r,{unsafe:!0})},function(e,t,n){"use strict";var r=n(103),u=n(25),o=n(45),i=u.set,a=u.getterFor("String Iterator");o(String,"String",function(e){i(this,{type:"String Iterator",string:String(e),index:0})},function(){var e,t=a(this),n=t.string,u=t.index;return u>=n.length?{value:void 0,done:!0}:(e=r(n,u,!0),t.index+=e.length,{value:e,done:!1})})},function(e,t,n){"use strict";var r=n(2),u=n(4);e.exports=function(){for(var e=r(this),t=u(e.delete),n=!0,o=0,i=arguments.length;o<i;o++)n=n&&t.call(e,arguments[o]);return!!n}},function(e,t,n){"use strict";var r=n(4),u=n(7),o=n(9);e.exports=function(e){var t,n,i,a,l=arguments[1];return r(this),(t=void 0!==l)&&r(l),void 0==e?new this:(n=[],t?(i=0,a=u(l,arguments[2],2),o(e,function(e){n.push(a(e,i++))})):o(e,n.push,n),new this(n))}},function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},function(e,t,n){t.f=n(6)},function(e,t,n){"use strict";var r=n(28),u=n(13),o=n(23);e.exports=function(e,t,n){var i=r(t);i in e?u.f(e,i,o(0,n)):e[i]=n}},function(e,t,n){"use strict";var r=n(173);function u(){}var o=null,i={};function a(e){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof e)throw new TypeError("Promise constructor\'s argument is not a function");this._h=0,this._i=0,this._j=null,this._k=null,e!==u&&p(e,this)}function l(e,t){for(;3===e._i;)e=e._j;if(a._l&&a._l(e),0===e._i)return 0===e._h?(e._h=1,void(e._k=t)):1===e._h?(e._h=2,void(e._k=[e._k,t])):void e._k.push(t);!function(e,t){r(function(){var n=1===e._i?t.onFulfilled:t.onRejected;if(null!==n){var r=function(e,t){try{return e(t)}catch(e){return o=e,i}}(n,e._j);r===i?s(t.promise,o):c(t.promise,r)}else 1===e._i?c(t.promise,e._j):s(t.promise,e._j)})}(e,t)}function c(e,t){if(t===e)return s(e,new TypeError("A promise cannot be resolved with itself."));if(t&&("object"===typeof t||"function"===typeof t)){var n=function(e){try{return e.then}catch(e){return o=e,i}}(t);if(n===i)return s(e,o);if(n===e.then&&t instanceof a)return e._i=3,e._j=t,void f(e);if("function"===typeof n)return void p(n.bind(t),e)}e._i=1,e._j=t,f(e)}function s(e,t){e._i=2,e._j=t,a._m&&a._m(e,t),f(e)}function f(e){if(1===e._h&&(l(e,e._k),e._k=null),2===e._h){for(var t=0;t<e._k.length;t++)l(e,e._k[t]);e._k=null}}function d(e,t,n){this.onFulfilled="function"===typeof e?e:null,this.onRejected="function"===typeof t?t:null,this.promise=n}function p(e,t){var n=!1,r=function(e,t,n){try{e(t,n)}catch(e){return o=e,i}}(e,function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))});n||r!==i||(n=!0,s(t,o))}e.exports=a,a._l=null,a._m=null,a._n=u,a.prototype.then=function(e,t){if(this.constructor!==a)return function(e,t,n){return new e.constructor(function(r,o){var i=new a(u);i.then(r,o),l(e,new d(t,n,i))})}(this,e,t);var n=new a(u);return l(this,new d(e,t,n)),n}},function(e,t){var n=[["Aacute",[193]],["aacute",[225]],["Abreve",[258]],["abreve",[259]],["ac",[8766]],["acd",[8767]],["acE",[8766,819]],["Acirc",[194]],["acirc",[226]],["acute",[180]],["Acy",[1040]],["acy",[1072]],["AElig",[198]],["aelig",[230]],["af",[8289]],["Afr",[120068]],["afr",[120094]],["Agrave",[192]],["agrave",[224]],["alefsym",[8501]],["aleph",[8501]],["Alpha",[913]],["alpha",[945]],["Amacr",[256]],["amacr",[257]],["amalg",[10815]],["amp",[38]],["AMP",[38]],["andand",[10837]],["And",[10835]],["and",[8743]],["andd",[10844]],["andslope",[10840]],["andv",[10842]],["ang",[8736]],["ange",[10660]],["angle",[8736]],["angmsdaa",[10664]],["angmsdab",[10665]],["angmsdac",[10666]],["angmsdad",[10667]],["angmsdae",[10668]],["angmsdaf",[10669]],["angmsdag",[10670]],["angmsdah",[10671]],["angmsd",[8737]],["angrt",[8735]],["angrtvb",[8894]],["angrtvbd",[10653]],["angsph",[8738]],["angst",[197]],["angzarr",[9084]],["Aogon",[260]],["aogon",[261]],["Aopf",[120120]],["aopf",[120146]],["apacir",[10863]],["ap",[8776]],["apE",[10864]],["ape",[8778]],["apid",[8779]],["apos",[39]],["ApplyFunction",[8289]],["approx",[8776]],["approxeq",[8778]],["Aring",[197]],["aring",[229]],["Ascr",[119964]],["ascr",[119990]],["Assign",[8788]],["ast",[42]],["asymp",[8776]],["asympeq",[8781]],["Atilde",[195]],["atilde",[227]],["Auml",[196]],["auml",[228]],["awconint",[8755]],["awint",[10769]],["backcong",[8780]],["backepsilon",[1014]],["backprime",[8245]],["backsim",[8765]],["backsimeq",[8909]],["Backslash",[8726]],["Barv",[10983]],["barvee",[8893]],["barwed",[8965]],["Barwed",[8966]],["barwedge",[8965]],["bbrk",[9141]],["bbrktbrk",[9142]],["bcong",[8780]],["Bcy",[1041]],["bcy",[1073]],["bdquo",[8222]],["becaus",[8757]],["because",[8757]],["Because",[8757]],["bemptyv",[10672]],["bepsi",[1014]],["bernou",[8492]],["Bernoullis",[8492]],["Beta",[914]],["beta",[946]],["beth",[8502]],["between",[8812]],["Bfr",[120069]],["bfr",[120095]],["bigcap",[8898]],["bigcirc",[9711]],["bigcup",[8899]],["bigodot",[10752]],["bigoplus",[10753]],["bigotimes",[10754]],["bigsqcup",[10758]],["bigstar",[9733]],["bigtriangledown",[9661]],["bigtriangleup",[9651]],["biguplus",[10756]],["bigvee",[8897]],["bigwedge",[8896]],["bkarow",[10509]],["blacklozenge",[10731]],["blacksquare",[9642]],["blacktriangle",[9652]],["blacktriangledown",[9662]],["blacktriangleleft",[9666]],["blacktriangleright",[9656]],["blank",[9251]],["blk12",[9618]],["blk14",[9617]],["blk34",[9619]],["block",[9608]],["bne",[61,8421]],["bnequiv",[8801,8421]],["bNot",[10989]],["bnot",[8976]],["Bopf",[120121]],["bopf",[120147]],["bot",[8869]],["bottom",[8869]],["bowtie",[8904]],["boxbox",[10697]],["boxdl",[9488]],["boxdL",[9557]],["boxDl",[9558]],["boxDL",[9559]],["boxdr",[9484]],["boxdR",[9554]],["boxDr",[9555]],["boxDR",[9556]],["boxh",[9472]],["boxH",[9552]],["boxhd",[9516]],["boxHd",[9572]],["boxhD",[9573]],["boxHD",[9574]],["boxhu",[9524]],["boxHu",[9575]],["boxhU",[9576]],["boxHU",[9577]],["boxminus",[8863]],["boxplus",[8862]],["boxtimes",[8864]],["boxul",[9496]],["boxuL",[9563]],["boxUl",[9564]],["boxUL",[9565]],["boxur",[9492]],["boxuR",[9560]],["boxUr",[9561]],["boxUR",[9562]],["boxv",[9474]],["boxV",[9553]],["boxvh",[9532]],["boxvH",[9578]],["boxVh",[9579]],["boxVH",[9580]],["boxvl",[9508]],["boxvL",[9569]],["boxVl",[9570]],["boxVL",[9571]],["boxvr",[9500]],["boxvR",[9566]],["boxVr",[9567]],["boxVR",[9568]],["bprime",[8245]],["breve",[728]],["Breve",[728]],["brvbar",[166]],["bscr",[119991]],["Bscr",[8492]],["bsemi",[8271]],["bsim",[8765]],["bsime",[8909]],["bsolb",[10693]],["bsol",[92]],["bsolhsub",[10184]],["bull",[8226]],["bullet",[8226]],["bump",[8782]],["bumpE",[10926]],["bumpe",[8783]],["Bumpeq",[8782]],["bumpeq",[8783]],["Cacute",[262]],["cacute",[263]],["capand",[10820]],["capbrcup",[10825]],["capcap",[10827]],["cap",[8745]],["Cap",[8914]],["capcup",[10823]],["capdot",[10816]],["CapitalDifferentialD",[8517]],["caps",[8745,65024]],["caret",[8257]],["caron",[711]],["Cayleys",[8493]],["ccaps",[10829]],["Ccaron",[268]],["ccaron",[269]],["Ccedil",[199]],["ccedil",[231]],["Ccirc",[264]],["ccirc",[265]],["Cconint",[8752]],["ccups",[10828]],["ccupssm",[10832]],["Cdot",[266]],["cdot",[267]],["cedil",[184]],["Cedilla",[184]],["cemptyv",[10674]],["cent",[162]],["centerdot",[183]],["CenterDot",[183]],["cfr",[120096]],["Cfr",[8493]],["CHcy",[1063]],["chcy",[1095]],["check",[10003]],["checkmark",[10003]],["Chi",[935]],["chi",[967]],["circ",[710]],["circeq",[8791]],["circlearrowleft",[8634]],["circlearrowright",[8635]],["circledast",[8859]],["circledcirc",[8858]],["circleddash",[8861]],["CircleDot",[8857]],["circledR",[174]],["circledS",[9416]],["CircleMinus",[8854]],["CirclePlus",[8853]],["CircleTimes",[8855]],["cir",[9675]],["cirE",[10691]],["cire",[8791]],["cirfnint",[10768]],["cirmid",[10991]],["cirscir",[10690]],["ClockwiseContourIntegral",[8754]],["clubs",[9827]],["clubsuit",[9827]],["colon",[58]],["Colon",[8759]],["Colone",[10868]],["colone",[8788]],["coloneq",[8788]],["comma",[44]],["commat",[64]],["comp",[8705]],["compfn",[8728]],["complement",[8705]],["complexes",[8450]],["cong",[8773]],["congdot",[10861]],["Congruent",[8801]],["conint",[8750]],["Conint",[8751]],["ContourIntegral",[8750]],["copf",[120148]],["Copf",[8450]],["coprod",[8720]],["Coproduct",[8720]],["copy",[169]],["COPY",[169]],["copysr",[8471]],["CounterClockwiseContourIntegral",[8755]],["crarr",[8629]],["cross",[10007]],["Cross",[10799]],["Cscr",[119966]],["cscr",[119992]],["csub",[10959]],["csube",[10961]],["csup",[10960]],["csupe",[10962]],["ctdot",[8943]],["cudarrl",[10552]],["cudarrr",[10549]],["cuepr",[8926]],["cuesc",[8927]],["cularr",[8630]],["cularrp",[10557]],["cupbrcap",[10824]],["cupcap",[10822]],["CupCap",[8781]],["cup",[8746]],["Cup",[8915]],["cupcup",[10826]],["cupdot",[8845]],["cupor",[10821]],["cups",[8746,65024]],["curarr",[8631]],["curarrm",[10556]],["curlyeqprec",[8926]],["curlyeqsucc",[8927]],["curlyvee",[8910]],["curlywedge",[8911]],["curren",[164]],["curvearrowleft",[8630]],["curvearrowright",[8631]],["cuvee",[8910]],["cuwed",[8911]],["cwconint",[8754]],["cwint",[8753]],["cylcty",[9005]],["dagger",[8224]],["Dagger",[8225]],["daleth",[8504]],["darr",[8595]],["Darr",[8609]],["dArr",[8659]],["dash",[8208]],["Dashv",[10980]],["dashv",[8867]],["dbkarow",[10511]],["dblac",[733]],["Dcaron",[270]],["dcaron",[271]],["Dcy",[1044]],["dcy",[1076]],["ddagger",[8225]],["ddarr",[8650]],["DD",[8517]],["dd",[8518]],["DDotrahd",[10513]],["ddotseq",[10871]],["deg",[176]],["Del",[8711]],["Delta",[916]],["delta",[948]],["demptyv",[10673]],["dfisht",[10623]],["Dfr",[120071]],["dfr",[120097]],["dHar",[10597]],["dharl",[8643]],["dharr",[8642]],["DiacriticalAcute",[180]],["DiacriticalDot",[729]],["DiacriticalDoubleAcute",[733]],["DiacriticalGrave",[96]],["DiacriticalTilde",[732]],["diam",[8900]],["diamond",[8900]],["Diamond",[8900]],["diamondsuit",[9830]],["diams",[9830]],["die",[168]],["DifferentialD",[8518]],["digamma",[989]],["disin",[8946]],["div",[247]],["divide",[247]],["divideontimes",[8903]],["divonx",[8903]],["DJcy",[1026]],["djcy",[1106]],["dlcorn",[8990]],["dlcrop",[8973]],["dollar",[36]],["Dopf",[120123]],["dopf",[120149]],["Dot",[168]],["dot",[729]],["DotDot",[8412]],["doteq",[8784]],["doteqdot",[8785]],["DotEqual",[8784]],["dotminus",[8760]],["dotplus",[8724]],["dotsquare",[8865]],["doublebarwedge",[8966]],["DoubleContourIntegral",[8751]],["DoubleDot",[168]],["DoubleDownArrow",[8659]],["DoubleLeftArrow",[8656]],["DoubleLeftRightArrow",[8660]],["DoubleLeftTee",[10980]],["DoubleLongLeftArrow",[10232]],["DoubleLongLeftRightArrow",[10234]],["DoubleLongRightArrow",[10233]],["DoubleRightArrow",[8658]],["DoubleRightTee",[8872]],["DoubleUpArrow",[8657]],["DoubleUpDownArrow",[8661]],["DoubleVerticalBar",[8741]],["DownArrowBar",[10515]],["downarrow",[8595]],["DownArrow",[8595]],["Downarrow",[8659]],["DownArrowUpArrow",[8693]],["DownBreve",[785]],["downdownarrows",[8650]],["downharpoonleft",[8643]],["downharpoonright",[8642]],["DownLeftRightVector",[10576]],["DownLeftTeeVector",[10590]],["DownLeftVectorBar",[10582]],["DownLeftVector",[8637]],["DownRightTeeVector",[10591]],["DownRightVectorBar",[10583]],["DownRightVector",[8641]],["DownTeeArrow",[8615]],["DownTee",[8868]],["drbkarow",[10512]],["drcorn",[8991]],["drcrop",[8972]],["Dscr",[119967]],["dscr",[119993]],["DScy",[1029]],["dscy",[1109]],["dsol",[10742]],["Dstrok",[272]],["dstrok",[273]],["dtdot",[8945]],["dtri",[9663]],["dtrif",[9662]],["duarr",[8693]],["duhar",[10607]],["dwangle",[10662]],["DZcy",[1039]],["dzcy",[1119]],["dzigrarr",[10239]],["Eacute",[201]],["eacute",[233]],["easter",[10862]],["Ecaron",[282]],["ecaron",[283]],["Ecirc",[202]],["ecirc",[234]],["ecir",[8790]],["ecolon",[8789]],["Ecy",[1069]],["ecy",[1101]],["eDDot",[10871]],["Edot",[278]],["edot",[279]],["eDot",[8785]],["ee",[8519]],["efDot",[8786]],["Efr",[120072]],["efr",[120098]],["eg",[10906]],["Egrave",[200]],["egrave",[232]],["egs",[10902]],["egsdot",[10904]],["el",[10905]],["Element",[8712]],["elinters",[9191]],["ell",[8467]],["els",[10901]],["elsdot",[10903]],["Emacr",[274]],["emacr",[275]],["empty",[8709]],["emptyset",[8709]],["EmptySmallSquare",[9723]],["emptyv",[8709]],["EmptyVerySmallSquare",[9643]],["emsp13",[8196]],["emsp14",[8197]],["emsp",[8195]],["ENG",[330]],["eng",[331]],["ensp",[8194]],["Eogon",[280]],["eogon",[281]],["Eopf",[120124]],["eopf",[120150]],["epar",[8917]],["eparsl",[10723]],["eplus",[10865]],["epsi",[949]],["Epsilon",[917]],["epsilon",[949]],["epsiv",[1013]],["eqcirc",[8790]],["eqcolon",[8789]],["eqsim",[8770]],["eqslantgtr",[10902]],["eqslantless",[10901]],["Equal",[10869]],["equals",[61]],["EqualTilde",[8770]],["equest",[8799]],["Equilibrium",[8652]],["equiv",[8801]],["equivDD",[10872]],["eqvparsl",[1