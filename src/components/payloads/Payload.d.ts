import MessagePayload from "./MessagePayload";
import PostbackPayload from "./PostbackPayload";
import QuickReplyPayload from "./QuickReplyPayload";

type Payload = MessagePayload | PostbackPayload | QuickReplyPayload;

export default Payload;
