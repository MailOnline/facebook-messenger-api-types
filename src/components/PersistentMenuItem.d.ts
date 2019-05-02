import {Button} from "./buttons/Button";

export type PersistentMenuItem = {
      call_to_actions: PersistentMenuItem[];
      title: string;
      type: 'nested';
    }
  | Button;
