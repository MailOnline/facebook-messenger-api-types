import {MessageBase} from './MessageBase';
import {RichMediaMessageAttachment} from '../attachments/RichMediaMessageAttachment';

export interface RichMediaMessage extends MessageBase {
  attachment: RichMediaMessageAttachment;
}
