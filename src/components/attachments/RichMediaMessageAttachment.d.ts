import {Recipient} from '../Recipient';

type AssetType = 'image' | 'audio' | 'video' | 'file';

interface AttachmentFromUrlPayload {
  url: string;
  is_reusable: boolean;
}

interface AttachmentFromFile {
  recipient: Recipient;
  message: {
    attachment: {
      type: AssetType;
      payload: {
        is_reusable?: boolean;
      };
    };
  };
  filedata: string;
}

interface AttachmentFromSaved {
  recipient: Recipient;
  message: {
    attachment: {
      type: AssetType;
      payload: {
        attachment_id: string;
      };
    };
  };
}

type RichMediaMessageAttachmenPayload = AttachmentFromUrlPayload | AttachmentFromFile | AttachmentFromSaved;

export interface RichMediaMessageAttachment {
  type: AssetType;
  payload: RichMediaMessageAttachmenPayload;
}
