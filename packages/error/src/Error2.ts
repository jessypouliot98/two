export namespace Error2 {
  export function assertsValueIsError(value: unknown): asserts value is Error {
    if (!(value instanceof Error)) {
      throw new Error("value is not an instance of error")
    }
  }

  /**
   * Returns result of `callback` or error.
   * If `error` is not an `Error` it will throw the received error instead
   */
  export function boundary<TFunc extends () => any>(callback: TFunc): ReturnType<TFunc> | Error {
    try {
      return callback();
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }
      return err;
    }
  }

  /**
   * Returns result of `callback` or error.
   * If `error` is not an `TErrorClass` it will throw the received error instead
   */
  export function boundaryStrict<TFunc extends () => any, TErrorClass extends typeof Error>(callback: TFunc, expectedErrors: TErrorClass[]): ReturnType<TFunc> | TErrorClass {
    try {
      return callback();
    } catch (err) {
      if (!expectedErrors.some((expectedError) => err instanceof expectedError)) {
        throw err;
      }
      return err as TErrorClass;
    }
  }
}