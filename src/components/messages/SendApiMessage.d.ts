import RichMediaMessage from './RichMediaMessage';
import TemplateMessage from './TemplateMessage';
import TextMessage from './TextMessage';

type AttachmentMessage = RichMediaMessage | TemplateMessage;

type SendApiMessage = TextMessage | AttachmentMessage;

export default SendApiMessage;
