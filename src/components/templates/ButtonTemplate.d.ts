import Recipient from '../Recipient';
import ButtonMessage from '../messages/ButtonMessage';
import MessagingType from '../../components/MessagingType';
import NotificationType from '../NotificationType';
import Tag from '../Tag';

interface ButtonTemplate {
  recipient: Recipient;
  message: ButtonMessage;
  messaging_type: MessagingType;
  notification_type?: NotificationType;
  tag?: Tag;
}

export default ButtonTemplate;
