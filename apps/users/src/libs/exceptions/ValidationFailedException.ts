import { BaseException } from './BaseException'

interface Fields {
  [key: string]: string
}

export class ValidationFailedException extends BaseException {
  constructor(fields: Fields) {
    super('Failed to validate fields.', 'VALIDATION_FAILED', fields)
  }
}