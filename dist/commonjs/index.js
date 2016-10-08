'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _config = require('./config');

function configure(frameworkConfig, configOrConfigure) {
  var config = frameworkConfig.container.get(_config.Config);

  if (typeof configOrConfigure === 'function') {
    configOrConfigure(config);
    return;
  }

  config.configure(configOrConfigure);
}