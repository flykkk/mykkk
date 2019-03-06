require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_style_css__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_style_css__);




// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5201665f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5201665f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5201665f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5201665f", Component.options)
  } else {
    hotAPI.reload("data-v-5201665f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//import card from '@/components/card'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },


  /*components: {
    card
  },*/

  methods: {},

  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('ul', {
    staticClass: "mainmenu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "../jszm/main"
    }
  }, [_c('b', [_vm._v("计划生育证明")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../shfyfzs/home/main"
    }
  }, [_c('b', [_vm._v("社会抚养费征收")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../sydj/main"
    }
  }, [_c('b', [_vm._v("生育登记")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../mfyj/main"
    }
  }, [_c('b', [_vm._v("避孕药具发放")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../xyda/home/main"
    }
  }, [_c('b', [_vm._v("信用档案")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../zxjh/main"
    }
  }, [_c('b', [_vm._v("在线咨询")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../hdxx/main"
    }
  }, [_c('b', [_vm._v("活动信息")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "../zcxx/main"
    }
  }, [_c('b', [_vm._v("政策信息")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "copyright"
  }, [_c('br'), _c('br'), _vm._v("厦门市纵达科技有限公司® 版权所有©")], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "png",
    staticStyle: {
      "width": "100%",
      "height": "460rpx"
    },
    attrs: {
      "src": "../../../static/images/bg8.jpg",
      "mode": "widthFix"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5201665f", esExports)
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[20]);