import Recipient from '../Recipient';
import GenericMessage from '../messages/GenericMessage';

interface GenericTemplate {
  message: GenericMessage;
  recipient: Recipient;
}

export default GenericTemplate;
