export class Config {
    defaultBaseUrl;
    urls = {};

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
}