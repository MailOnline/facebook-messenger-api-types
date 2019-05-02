import {RichMediaMessage} from './RichMediaMessage';
import {TemplateMessage} from './TemplateMessage';
import {TextMessage} from './TextMessage';

type AttachmentMessage = RichMediaMessage | TemplateMessage;

export type SendApiMessage = TextMessage | AttachmentMessage;
