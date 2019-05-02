import {MessageBase} from './MessageBase';

export interface TextMessage extends MessageBase {
  text: string;
}
