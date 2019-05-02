import {GenericTemplateElement} from '../elements/GenericTemplateElement';

interface GenericMessagePayload {
  elements: GenericTemplateElement[];
  image_aspect_ratio?: 'horizontal' | 'square';
  sharable?: boolean;
  template_type: 'generic';
}

export interface GenericMessageAttachment {
  type: 'template';
  payload: GenericMessagePayload;
}
