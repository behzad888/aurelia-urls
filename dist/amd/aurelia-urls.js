define(['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Config = undefined;
    exports.configure = configure;

    

    var Config = exports.Config = function () {
        function Config() {
            

            this.urls = {};
        }

        Config.prototype.registerUrl = function registerUrl(name, url) {
            this.urls[name] = url;

            return this;
        };

        Config.prototype.getUrl = function getUrl(name) {
            if (!name) {
                return this.defaultBaseUrl || '';
            }

            return this.urls[name] || '';
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
    }();

    function configure(frameworkConfig, configOrConfigure) {
        var config = frameworkConfig.container.get(Config);

        if (typeof configOrConfigure === 'function') {
            configOrConfigure(config);
            return;
        }

        config.configure(configOrConfigure);
    }
});