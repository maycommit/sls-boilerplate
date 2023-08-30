import { APIGatewayEvent } from "aws-lambda";

export type GatewayEvent<T> = APIGatewayEvent & {
  body: T;
}