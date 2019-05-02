import {NotificationType} from '../components/NotificationType';

export interface SendBroadcastData {
  custom_label_id: string;
  message_creative_id: number;
  messaging_type: 'MESSAGE_TAG';
  notification_type?: NotificationType;
  schedule_time?: string;
  tag: 'NON_PROMOTIONAL_SUBSCRIPTION';
}
