import {ReceivedPayloadBase} from './ReceivedPayloadBase';

export interface MessagePayload extends ReceivedPayloadBase {
  message: {
    mid: string;
    seq: string;
    text: string;
  };
}
