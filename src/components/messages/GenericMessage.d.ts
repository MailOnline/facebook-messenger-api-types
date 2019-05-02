import {MessageBase} from './MessageBase';
import {GenericMessageAttachment} from '../attachments/GenericMessageAttachment';

export interface GenericMessage extends MessageBase {
  attachment: GenericMessageAttachment;
}
