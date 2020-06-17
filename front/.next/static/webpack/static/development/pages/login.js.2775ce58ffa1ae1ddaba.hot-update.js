webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");

var _jsxFileName = "/home/vagrant/mysite/front/pages/login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Login() {
  var _useSession = Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["useSession"])(),
      _useSession2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSession, 2),
      session = _useSession2[0],
      loading = _useSession2[1];

  return __jsx("div", {
    className: "jsx-4031369536" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "mysite"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, !session && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Not signed in ", __jsx("br", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 27
    }
  }), __jsx("a", {
    href: "/api/auth/signin",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Sign in")), session && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Signed in as ", session.user.email, " ", __jsx("br", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 47
    }
  }), __jsx("a", {
    href: "/api/auth/signout",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Sign out"))), __jsx("form", {
    action: "#",
    method: "post",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "\u540D\u524D",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })), __jsx("li", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    id: "password",
    name: "password",
    placeholder: "\u30D1\u30B9\u30EF\u30FC\u30C9",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  })), __jsx("li", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\u30ED\u30B0\u30A4\u30F3"))))), __jsx("footer", {
    className: "jsx-4031369536",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4031369536",
    __self: this
  }, "main.jsx-4031369536{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-4031369536{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (max-width:600px){.grid.jsx-4031369536{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}li.jsx-4031369536{list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvbXlzaXRlL2Zyb250L3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDa0IsQUFHMEIsQUFTSixBQVVFLEFBTVEsV0FmUixBQVVXLElBbkJqQixNQXlCVCxHQWYrQix3QkFUaEIsS0FVQSxvQ0FTYixpQ0FsQnNCLEtBVUMseUVBVEEsMEJBVUoseUVBVEEsb0JBVXJCLHlFQVRBIiwiZmlsZSI6Ii9ob21lL3ZhZ3JhbnQvbXlzaXRlL2Zyb250L3BhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbmluLCBzaWdub3V0IH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFtzZXNzaW9uLCBsb2FkaW5nXSA9IHVzZVNlc3Npb24oKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPm15c2l0ZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8TmF2IC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHshc2Vzc2lvbiAmJiA8PlxyXG4gICAgICAgICAgICBOb3Qgc2lnbmVkIGluIDxiciAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2FwaS9hdXRoL3NpZ25pblwiPlNpZ24gaW48L2E+XHJcbiAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICB7c2Vzc2lvbiAmJiA8PlxyXG4gICAgICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5lbWFpbH0gPGJyIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXBpL2F1dGgvc2lnbm91dFwiPlNpZ24gb3V0PC9hPlxyXG4gICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCLlkI3liY1cIiAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi44OR44K544Ov44O844OJXCIgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuODreOCsOOCpOODszwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgPC9mb290ZXI+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=/home/vagrant/mysite/front/pages/login.js */"));
}

/***/ })

})
//# sourceMappingURL=login.js.2775ce58ffa1ae1ddaba.hot-update.js.map