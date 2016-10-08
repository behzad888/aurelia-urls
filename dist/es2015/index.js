import { Container } from 'aurelia-dependency-injection';
import { Config } from './config';

export function configure(frameworkConfig, configOrConfigure) {
  let config = frameworkConfig.container.get(Config);

  if (typeof configOrConfigure === 'function') {
    configOrConfigure(config);
    return;
  }

  config.configure(configOrConfigure);
}