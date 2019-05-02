import GenericMessage from './GenericMessage';
import DynamicTextMessage from './DynamicTextMessage';

type BroadcastMessage = GenericMessage | DynamicTextMessage;

export default BroadcastMessage;
