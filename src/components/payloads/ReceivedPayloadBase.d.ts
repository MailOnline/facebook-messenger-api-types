import PayloadBase from './PayloadBase';

interface ReceivedPayloadBase extends PayloadBase {
  sender: {
    id: string;
  };
  timestamp: number;
}

export default ReceivedPayloadBase;
