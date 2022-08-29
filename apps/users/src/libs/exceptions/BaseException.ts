export class BaseException extends Error {
  code: string
  meta: unknown

  constructor(message: string, code: string, meta?: unknown) {
    super(message)
    this.code = code
    this.meta = meta

    Object.setPrototypeOf(this, BaseException.prototype);
  }
}