import {Container} from 'aurelia-dependency-injection';

export declare class Config {
  defaultBaseUrl: any;
  urls: any;
  registerUrl(name?: any, url?: any): any;
  getUrl(): any;
  setDefaultBaseUrl(baseUrl?: any): any;
  urlExists(name?: any): any;
  configure(config?: any): any;
}
export declare function configure(frameworkConfig: { container: Container }, configOrConfigure?: any): any;