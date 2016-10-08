'use strict';

System.register(['aurelia-dependency-injection', './config'], function (_export, _context) {
  "use strict";

  var Container, Config;
  function configure(frameworkConfig, configOrConfigure) {
    var config = frameworkConfig.container.get(Config);

    if (typeof configOrConfigure === 'function') {
      configOrConfigure(config);
      return;
    }

    config.configure(configOrConfigure);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_config) {
      Config = _config.Config;
    }],
    execute: function () {}
  };
});