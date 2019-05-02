import BuyButton from './BuyButton';
import CallButton from './CallButton';
import GamePlayButton from './GamePlayButton';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';
import PostbackButton from './PostbackButton';
import ShareButton from './ShareButton';
import UrlButton from './UrlButton';

type Button =
  | BuyButton
  | CallButton
  | GamePlayButton
  | LogInButton
  | LogOutButton
  | PostbackButton
  | ShareButton
  | UrlButton;

export default Button;
