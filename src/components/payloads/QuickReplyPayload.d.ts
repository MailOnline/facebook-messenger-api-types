import {ReceivedPayloadBase} from './ReceivedPayloadBase';

export interface QuickReplyPayload extends ReceivedPayloadBase {
  message: {
    mid: string;
    quick_reply: {
      payload: string;
    };
    seq: number;
    text: string;
  };
}
