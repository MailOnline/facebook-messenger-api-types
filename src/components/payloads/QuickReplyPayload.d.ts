import ReceivedPayloadBase from './ReceivedPayloadBase';

interface QuickReplyPayload extends ReceivedPayloadBase {
  message: {
    mid: string;
    quick_reply: {
      payload: string;
    };
    seq: number;
    text: string;
  };
}

export default QuickReplyPayload;
