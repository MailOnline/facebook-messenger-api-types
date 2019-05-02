import {GenericTemplate} from '../templates/GenericTemplate';
import {ButtonTemplate} from '../templates/ButtonTemplate';

export interface TemplateMessage {
  attachment: GenericTemplate | ButtonTemplate;
}
