import {MessagePayload} from "./MessagePayload";
import {PostbackPayload} from "./PostbackPayload";
import {QuickReplyPayload} from "./QuickReplyPayload";

export type Payload = MessagePayload | PostbackPayload | QuickReplyPayload;
