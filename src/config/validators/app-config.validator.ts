import AppConfigInterface from '../interfaces/app-config.interface';

export default class AppConfigValidator {

  private static validateConfig(app: AppConfigInterface['app']){
    if (!(app)) {
      throw new Error('Invalid app config format');
    }
  }

  private static validatePort(port: string) {
    const minPortValue = 0;
    const maxPortValue = 65535;
    if (!(port && Number(port) > minPortValue && Number(port) < maxPortValue)) {
      throw new Error(`Invalid app port. Must be a number between ${minPortValue} and ${maxPortValue}`);
    }
  }

  private static validateRequestTimeout(requestTimeout: number) {
    const minRequestTimeoutValue = 0;
    const maxRequestTimeoutValue = 30000;
    if (!(requestTimeout && requestTimeout >= minRequestTimeoutValue && requestTimeout <= maxRequestTimeoutValue)) {
      throw new Error(`Invalid app request timeout. Must be a number between ${minRequestTimeoutValue} and ${maxRequestTimeoutValue}`);
    }
  }

  public static validate(app: AppConfigInterface['app']) {
    AppConfigValidator.validateConfig(app);
    AppConfigValidator.validatePort(app.port);
    AppConfigValidator.validateRequestTimeout(app.requestTimeout);
  }
}
