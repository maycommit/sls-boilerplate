import Joi from 'joi'

export const schemaValidatorMiddleware = (schema: any) => {
  return {
    before: async (request: any) => {
      Joi.assert(request.body, schema)
    }
  }
}