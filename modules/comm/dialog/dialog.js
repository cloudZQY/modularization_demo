var doT = require('doT');
var $ = require('jquery');

var Dialog = function (settings) {
  var defaults = {
    id: 'dialog',
    showClose: true,
    width: 'auto',
    height: 'auto',
    title: '',
    content: null,
    yesFn: null,
    closeFn: null,
  }
  this.settings = $.extend(true, defaults, settings);
  this.init();
};

$.extend(Dialog.prototype, {
  init: function () {
    var _this = this;
    require.ensure('./tpl/main.html', function (dialogTpl) {
      var dialogHtml = doT.template(dialogTpl)(_this.settings);
      $('body').append(dialogHtml);

      _this.initEvent();

      _this.toCenter();
    });
  },
  initEvent: function () {

  },
  toCenter: function () {

  }
});