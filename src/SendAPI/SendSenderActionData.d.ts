import {Recipient} from '../components/Recipient';
import {SenderAction} from '../components/SenderAction';

export interface SendSenderActionData {
  recipient: Recipient;
  sender_action: SenderAction;
}
