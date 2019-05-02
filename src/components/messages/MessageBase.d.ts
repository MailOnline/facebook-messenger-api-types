interface QuickReply {
  content_type: string;
  image_url?: string;
  payload: number | string;
  title: string;
}

interface MessageBase {
  metadata?: string;
  quickReplies?: QuickReply[];
}

export default MessageBase;
