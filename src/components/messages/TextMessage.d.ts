import MessageBase from './MessageBase';

interface TextMessage extends MessageBase {
  text: string;
}

export default TextMessage;
