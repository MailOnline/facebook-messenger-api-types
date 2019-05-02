import DefaultAction from '../DefaultAction';
import Button from '../buttons/Button';

export interface GenericTemplateElement {
  buttons?: Button[];
  default_action?: DefaultAction;
  image_url?: string;
  subtitle?: string;
  title: string;
}

interface GenericMessagePayload {
  elements: GenericTemplateElement[];
  image_aspect_ratio?: 'horizontal' | 'square';
  sharable?: boolean;
  template_type: 'generic';
}

interface GenericMessageAttachment {
  type: 'template';
  payload: GenericMessagePayload;
}

export default GenericMessageAttachment;
