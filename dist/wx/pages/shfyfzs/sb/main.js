require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(62);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c9b1ee60_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(65);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c9b1ee60"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c9b1ee60_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shfyfzs\\sb\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c9b1ee60", Component.options)
  } else {
    hotAPI.reload("data-v-c9b1ee60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 64:
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
var myDate = new Date();
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      StatusBar: '',
      CustomBar: '',
      addrs: ["111", "222", "333"],
      bir: '',
      d: {
        addr: ''
      }
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

  methods: {
    //选择地址
    addrChange: function addrChange(e) {
      this.d.addr = e.mp.detail.value;
    },
    //日期选择
    DateChange: function DateChange(e) {
      this.d.bir = e.mp.detail.value;
    }
  },
  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 65:
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
  }), _vm._v(" 社会抚养费申报\n      ")])], 1)]), _vm._v(" "), _c('div', [_c('form', [_c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("姓名")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "请输入姓名",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("现有男孩数")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "请输入现有男孩数",
      "type": "number",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("现有女孩数")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "请输入现有女孩数",
      "type": "number",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("生育情况")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "请输入姓名",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("出生年月")]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "start": "2015-09-01",
      "end": "2020-09-01",
      "eventid": '0'
    },
    on: {
      "change": _vm.DateChange
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_vm._v("\n         hh  " + _vm._s(_vm.bir) + "\n        ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group margin-top"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("邮件")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "两字短标题",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("输入框")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "三字标题",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("收货地址")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "统一标题的宽度",
      "name": "input"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("收货地址")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "输入框带个图标",
      "name": "input"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "icon-locationfill text-orange"
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("验证码")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "输入框带个按钮",
      "name": "input"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "cu-btn bg-green shadow"
  }, [_vm._v("验证码")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("手机号码")]), _vm._v(" "), _c('input', {
    staticClass: "radius",
    attrs: {
      "placeholder": "输入框带标签",
      "name": "input"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "cu-capsule radius"
  }, [_c('div', {
    staticClass: "cu-tag bg-blue "
  }, [_vm._v("\n            +86\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "cu-tag line-blue"
  }, [_vm._v("\n            中国大陆\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group margin-top"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("普通选择")]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": "index",
      "range": _vm.addrs,
      "eventid": '2'
    },
    on: {
      "change": _vm.addrChange
    }
  }, [_c('div', {
    staticClass: "picker"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.d.addr),
      expression: "d.addr"
    }],
    staticClass: "value",
    attrs: {
      "placeholder": "请选择",
      "disabled": "disabled",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.d.addr)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.d.addr = $event.target.value
      }
    }
  })])])], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group margin-top"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("开关选择")]), _vm._v(" "), _c('switch')]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("定义颜色")]), _vm._v(" "), _c('switch', {
    staticClass: "red sm",
    attrs: {
      "checked": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('switch', {
    staticClass: "switch-sex",
    attrs: {
      "checked": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("定义图标")])]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("方形开关")]), _vm._v(" "), _c('switch', {
    staticClass: "orange radius sm",
    attrs: {
      "checked": ""
    }
  })]), _vm._v(" "), _c('radio-group', {
    staticClass: "block",
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "cu-form-group margin-top"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("单选操作(radio)")]), _vm._v(" "), _c('radio', {
    attrs: {
      "checked": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("定义样式")]), _vm._v(" "), _c('radio', {
    staticClass: "radio"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("定义颜色")]), _vm._v(" "), _c('div', [_c('radio', {
    staticClass: "blue radio"
  }), _vm._v(" "), _c('radio', {
    staticClass: "red margin-left-sm"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group margin-top"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("复选选操作(checkbox)")]), _vm._v(" "), _c('checkbox')], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("定义形状")]), _vm._v(" "), _c('checkbox', {
    staticClass: "round",
    attrs: {
      "checked": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("定义颜色")]), _vm._v(" "), _c('checkbox', {
    staticClass: "round blue",
    attrs: {
      "checked": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cu-form-group margin-top"
  }, [_c('div', {
    staticClass: "grid col-3 grid-square flex-sub"
  }, [_c('div', {
    staticClass: "padding-xs bg-img",
    staticStyle: {
      "background-image": "url(https://image.weilanwl.com/img/square-1.jpg)"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "padding-xs bg-img",
    staticStyle: {
      "background-image": "url(https://image.weilanwl.com/img/square-2.jpg)"
    }
  }, [_c('div', {
    staticClass: "cu-tag bg-red"
  }, [_c('text', {
    staticClass: "icon-close"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "padding-xs solids"
  }, [_c('text', {
    staticClass: "icon-cameraadd"
  })])])])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c9b1ee60", esExports)
  }
}

/***/ })

},[61]);