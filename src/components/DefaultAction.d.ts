export interface DefaultAction {
  type: 'web_url';
  url: string;
  webview_height_ratio?: 'compact' | 'tall' | 'full';
  messenger_extensions?: true | false;
  fallback_url?: string;
  webview_share_button?: string;
}
