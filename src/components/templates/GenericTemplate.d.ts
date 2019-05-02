import {Recipient} from '../Recipient';
import {GenericMessage} from '../messages/GenericMessage';

export interface GenericTemplate {
  message: GenericMessage;
  recipient: Recipient;
}
