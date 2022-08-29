import middy from '@middy/core'
import * as yup from 'yup'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { ValidationFailedException } from '@libs/exceptions/ValidationFailedException'

const middleware = <T>(schema: yup.AnyObjectSchema): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  const before: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (
    request
  ): Promise<void> => {
    const { event: { body } } =  request
    try {
      schema.validateSync(body)
    } catch (e) {
      throw new ValidationFailedException()
    }

  }

  const after: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = async (
    request
  ): Promise<void> => {
    // Your middleware logic
  }

  return {
    before,
    after
  }
}

export default middleware