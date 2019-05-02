import {MessageBase} from './MessageBase';
import {ButtonMessageAttachment} from '../attachments/ButtonMessageAttachment';

export interface ButtonMessage extends MessageBase {
  attachment: ButtonMessageAttachment;
}
