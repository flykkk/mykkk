require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_colorui_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_colorui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_colorui_css__);




// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d7c94b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(75);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d7c94b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d7c94b2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\xyda\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d7c94b2", Component.options)
  } else {
    hotAPI.reload("data-v-1d7c94b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 74:
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
//
//
//
//
//
//

//import card from '@/components/card'
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {

    return {
      StatusBar: '',
      CustomBar: ''
    };
  },


  /*components: {
    card
  },*/
  onLoad: function onLoad() {},
  beforeMount: function beforeMount() {
    var _this = this;

    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: function success(e) {
        _this.StatusBar = e.statusBarHeight;
        var custom = wx.getMenuButtonBoundingClientRect();
        _this.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    });
  },

  methods: {},
  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "cu-custom",
    style: ({
      height: _vm.CustomBar + 'px'
    })
  }, [_c('div', {
    staticClass: "cu-bar fixed bg-gradual-blue",
    style: ({
      height: _vm.CustomBar + 'px',
      paddingTop: _vm.StatusBar + 'px'
    })
  }, [_c('navigator', {
    staticClass: "action",
    attrs: {
      "open-type": "navigateBack",
      "delta": "1",
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "icon-back"
  }), _vm._v(" 信用档案\n      ")])], 1)]), _vm._v(" "), _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "cu-list grid col-3 no-border"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "cu-item"
  }, [_c('div', {
    staticClass: "icon-text text-purple"
  }, [_c('div', {
    staticClass: "cu-tag badge"
  }, [_c('block')], 1)]), _vm._v(" "), _c('text', [_vm._v("案件审批")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "cu-item"
  }, [_c('div', {
    staticClass: "icon-search text-purple"
  }, [_c('div', {
    staticClass: "cu-tag badge"
  }, [_c('block', [_vm._v("333")])], 1)]), _vm._v(" "), _c('text', [_vm._v("333")])]), _vm._v(" "), _c('div', {
    staticClass: "cu-item"
  }, [_c('div', {
    staticClass: "icon-commandfill text-purple"
  }, [_c('div', {
    staticClass: "cu-tag badge"
  }, [_c('block', [_vm._v("333")])], 1)]), _vm._v(" "), _c('text', [_vm._v("333")])]), _vm._v(" "), _c('div', {
    staticClass: "cu-item"
  }, [_c('div', {
    staticClass: "icon-commandfill text-purple"
  }, [_c('div', {
    staticClass: "cu-tag badge"
  }, [_c('block', [_vm._v("333")])], 1)]), _vm._v(" "), _c('text', [_vm._v("333")])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cu-bar bg-white solid-bottom margin-top"
  }, [_c('div', {
    staticClass: "action"
  }), _vm._v(" "), _c('div', {
    staticClass: "action"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cu-item"
  }, [_c('div', {
    staticClass: "icon-writefill text-purple"
  }, [_c('div', {
    staticClass: "cu-tag badge"
  })]), _vm._v(" "), _c('text', [_vm._v("案件登记")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cu-item"
  }, [_c('div', {
    staticClass: "icon-search text-purple"
  }, [_c('div', {
    staticClass: "cu-tag badge"
  })]), _vm._v(" "), _c('text', [_vm._v("案件查询")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d7c94b2", esExports)
  }
}

/***/ })

},[71]);