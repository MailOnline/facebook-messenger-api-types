import Button from "../buttons/Button";

interface ButtonMessagePayload {
  buttons: Button[]; // 1 - 3 Buttons
  sharable?: boolean;
  template_type: 'button';
  text: string;
}

interface ButtonMessageAttachment {
  payload: ButtonMessagePayload;
  type: 'template';
}

export default ButtonMessageAttachment;
