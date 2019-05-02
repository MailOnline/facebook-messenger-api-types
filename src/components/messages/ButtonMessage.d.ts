import MessageBase from './MessageBase';
import ButtonMessageAttachment from '../attachments/ButtonMessageAttachment';

interface ButtonMessage extends MessageBase {
  attachment: ButtonMessageAttachment;
}

export default ButtonMessage;
