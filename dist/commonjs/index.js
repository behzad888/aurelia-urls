'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaUrls = require('./aurelia-urls');

Object.keys(_aureliaUrls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaUrls[key];
    }
  });
});