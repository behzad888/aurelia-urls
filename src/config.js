export class Config {
    defaultBaseUrl;
    urls = {};

    registerUrl(name, url) {
        this.urls[name] = url;

        return this;
    }

    getUrl() {
        if (!name) {
            return this.defaultBaseUrl || null;
        }

        return this.urls[name] || null;
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