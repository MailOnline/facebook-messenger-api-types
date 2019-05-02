import {DefaultAction} from '../DefaultAction';
import {Button} from '../buttons/Button';

export interface GenericTemplateElement {
  buttons?: Button[];
  default_action?: DefaultAction;
  image_url?: string;
  subtitle?: string;
  title: string;
}
