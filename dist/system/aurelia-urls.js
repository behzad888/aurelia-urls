'use strict';

System.register(['aurelia-dependency-injection'], function (_export, _context) {
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
        }],
        execute: function () {
            _export('Config', Config = function () {
                function Config() {
                    

                    this.urls = {};
                }

                Config.prototype.registerUrl = function registerUrl(name, url) {
                    this.urls[name] = url;

                    return this;
                };

                Config.prototype.getUrl = function getUrl(name) {
                    if (!name) {
                        return this.defaultBaseUrl || null;
                    }

                    return this.urls[name] || null;
                };

                Config.prototype.setDefaultBaseUrl = function setDefaultBaseUrl(baseUrl) {
                    this.defaultBaseUrl = baseUrl;

                    return this;
                };

                Config.prototype.urlExists = function urlExists(name) {
                    return !!this.urls[name];
                };

                Config.prototype.configure = function configure(config) {
                    var _this = this;

                    if (config.defaultBaseUrl) {
                        this.defaultBaseUrl = config.defaultBaseUrl;
                    }

                    config.urls.forEach(function (url) {
                        _this.registerUrl(url.name, url.url);

                        if (url.default) {
                            _this.setDefaultBaseUrl(url.name);
                        }
                    });
                    return this;
                };

                return Config;
            }());

            _export('Config', Config);
        }
    };
});