import {GenericMessage} from './GenericMessage';
import {DynamicTextMessage} from './DynamicTextMessage';

export type BroadcastMessage = GenericMessage | DynamicTextMessage;
