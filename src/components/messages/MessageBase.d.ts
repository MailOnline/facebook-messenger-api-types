interface QuickReply {
  content_type: string;
  image_url?: string;
  payload: number | string;
  title: string;
}

export interface MessageBase {
  metadata?: string;
  quickReplies?: QuickReply[];
}
