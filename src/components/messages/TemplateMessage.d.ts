import GenericTemplate from '../templates/GenericTemplate';
import ButtonTemplate from '../templates/ButtonTemplate';

interface TemplateMessage {
  attachment: GenericTemplate | ButtonTemplate;
}

export default TemplateMessage;
