import {SendApiMessage} from '../components/messages/SendApiMessage';
import {MessagingType} from '../components/MessagingType';
import {Recipient} from '../components/Recipient';
import {NotificationType} from '../components/NotificationType';
import {Tag} from '../components/Tag';

export interface SendMessageData {
  recipient: Recipient;
  message: SendApiMessage;
  messaging_type: MessagingType;
  notification_type?: NotificationType;
  tag?: Tag;
}
