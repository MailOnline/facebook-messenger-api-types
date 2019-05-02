import MessageBase from './MessageBase';
import RichMediaMessageAttachment from '../attachments/RichMediaMessageAttachment';

interface RichMediaMessage extends MessageBase {
  attachment: RichMediaMessageAttachment;
}

export default RichMediaMessage;
