import ReceivedPayloadBase from './ReceivedPayloadBase';

interface MessagePayload extends ReceivedPayloadBase {
  message: {
    mid: string;
    seq: string;
    text: string;
  };
}

export default MessagePayload;
