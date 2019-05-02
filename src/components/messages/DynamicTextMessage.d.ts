interface DynamicTextMessage {
  dynamic_text: {
    text: string;
    fallback_text: string;
  };
}

export default DynamicTextMessage;
