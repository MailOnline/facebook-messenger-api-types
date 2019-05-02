import {ReceivedPayloadBase} from './ReceivedPayloadBase';

export interface PostbackPayload extends ReceivedPayloadBase {
  postback: {
    payload: string;
    referral?: {
      ref?: string;
      referer_uri: string;
      source: 'ADS' | 'CUSTOMER_CHAT_PLUGIN' | 'DISCOVER_TAB' | 'MESSENGER_CODE' | 'SHORTLINK';
      type: 'OPEN_THREAD';
    };
    title: string;
  };
}
