import { noop } from "./noop";

/** Signature of a logging function */
interface LogFn {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (message?: any, ...optionalParams: any[]): void;
}

/** Basic logger interface */
interface Logger {
  error: LogFn;
  info: LogFn;
  success: LogFn;
  warning: LogFn;
}

/** Logger which outputs to the browser console */
export class DevLogger implements Logger {
  readonly error: LogFn;

  readonly info: LogFn;

  readonly success: LogFn;

  readonly warning: LogFn;

  constructor(enable: boolean) {
    if (enable) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.error = (message?: any, ...optionalParams: any[]) =>
        console.log("%c error", "color: red", message, ...optionalParams);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.info = (message?: any, ...optionalParams: any[]) =>
        console.log("%c info", "color: blue", message, ...optionalParams);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.success = (message?: any, ...optionalParams: any[]) =>
        console.log("%c success", "color: green", message, ...optionalParams);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.warning = (message?: any, ...optionalParams: any[]) =>
        console.log("%c warning", "color: orange", message, ...optionalParams);

      return;
    }

    this.error = noop;
    this.info = noop;
    this.success = noop;
    this.warning = noop;
  }
}
