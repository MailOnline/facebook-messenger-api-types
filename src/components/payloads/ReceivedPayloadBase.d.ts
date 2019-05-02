import {Recipient} from '../../components/Recipient';

export interface ReceivedPayloadBase {
  recipient: Recipient;
  sender: {
    id: string;
  };
  timestamp: number;
}
