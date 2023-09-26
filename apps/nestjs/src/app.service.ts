import { Injectable } from "@nestjs/common";
import { meaningOfLife } from "@dream/utils";

@Injectable()
export class AppService {
  // eslint-disable-next-line class-methods-use-this
  getHello = (): string => `The meaning of life is: ${meaningOfLife}`;
}
