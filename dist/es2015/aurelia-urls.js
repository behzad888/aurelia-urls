import { Container } from 'aurelia-dependency-injection';

export let Config = class Config {
    constructor() {
        this.urls = {};
    }

    registerUrl(name, url) {
        this.urls[name] = url;

        return this;
    }

    getUrl(name) {
        if (!name) {
            return this.defaultBaseUrl || '';
        }

        return this.urls[name] || '';
    }

    setDefaultBaseUrl(baseUrl) {
        this.defaultBaseUrl = baseUrl;

        return this;
    }

    urlExists(name) {
        return !!this.urls[name];
    }

    configure(config) {
        if (config.defaultBaseUrl) {
            this.defaultBaseUrl = config.defaultBaseUrl;
        }

        config.urls.forEach(url => {
            this.registerUrl(url.name, url.url);

            if (url.default) {
                this.setDefaultBaseUrl(url.name);
            }
        });
        return this;
    }
};
export function configure(frameworkConfig, configOrConfigure) {
    let config = frameworkConfig.container.get(Config);

    if (typeof configOrConfigure === 'function') {
        configOrConfigure(config);
        return;
    }

    config.configure(configOrConfigure);
}