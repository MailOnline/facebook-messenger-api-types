import MessageBase from './MessageBase';
import GenericMessageAttachment from '../attachments/GenericMessageAttachment';

interface GenericMessage extends MessageBase {
  attachment: GenericMessageAttachment;
}

export default GenericMessage;
