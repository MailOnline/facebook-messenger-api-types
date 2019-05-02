export interface GamePlayButton {
  game_metadata: {
    context_id: string;
    player_id: string;
  };
  payload: string;
  title: 'Play';
  type: 'game_play';
}
