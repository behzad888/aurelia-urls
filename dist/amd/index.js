define(['exports', 'aurelia-dependency-injection', './config'], function (exports, _aureliaDependencyInjection, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(frameworkConfig, configOrConfigure) {
    var config = frameworkConfig.container.get(_config.Config);

    if (typeof configOrConfigure === 'function') {
      configOrConfigure(config);
      return;
    }

    config.configure(configOrConfigure);
  }
});