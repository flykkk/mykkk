require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(52);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_092309e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-092309e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_092309e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shfyfzs\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-092309e0", Component.options)
  } else {
    hotAPI.reload("data-v-092309e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
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

//import card from '@/components/card'
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {

    return {
      StatusBar: '',
      CustomBar: '',
      Custom: '',
      aheight: '',
      imgurl: '../../../static/images/bg8.jpg'
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
        _this.Custom = custom;
        _this.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        _this.aheight = 750 - custom.right;
      }
    });
  },

  methods: {},
  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "cu-custom",
    style: ({
      height: 200 + 'px',
      background: 'url(' + _vm.imgurl + ')'
    })
  }, [_c('div', {
    staticClass: "cu-bar fixed",
    style: ({
      height: _vm.CustomBar + 'px',
      paddingTop: _vm.StatusBar + 'px'
    })
  }, [_c('navigator', {
    staticClass: "action border-custom",
    style: ({
      width: _vm.Custom.width + 'px',
      height: _vm.Custom.height + 'px'
    }),
    attrs: {
      "open-type": "navigateBack",
      "delta": "1",
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "icon-back"
  }), _vm._v(" "), _c('text', {
    staticClass: "icon-homefill"
  })]), _vm._v(" "), _c('div', {
    staticClass: "content",
    style: ({
      top: _vm.StatusBar + 'px'
    })
  }, [_vm._v("社会抚养费征收")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg",
    staticStyle: {
      "height": "200px"
    }
  }, [_c('div', {
    staticClass: "cu-item arrow",
    staticStyle: {
      "height": "33%"
    }
  }, [_c('navigator', {
    staticClass: "content",
    attrs: {
      "url": "../../shfyfzs/sb/main",
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "icon-github text-grey"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("社会抚养费申报")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-item arrow",
    staticStyle: {
      "height": "33%"
    }
  }, [_c('navigator', {
    staticClass: "content",
    attrs: {
      "url": "../jsq/main",
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "icon-formfill text-green"
  }), _vm._v(" "), _c('text', {
    staticClass: "text-grey"
  }, [_vm._v("社会抚养费计算器")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-item arrow",
    staticStyle: {
      "height": "33%"
    }
  }, [_c('navigator', {
    staticClass: "content",
    attrs: {
      "url": "../cx/main",
      "hover-class": "none"
    }
  }, [_c('text', {
    staticClass: "text-grey"
  }, [_vm._v("社会抚养费征收结果查询")])])], 1)]), _vm._v(" "), _c('div')])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-092309e0", esExports)
  }
}

/***/ })

},[51]);