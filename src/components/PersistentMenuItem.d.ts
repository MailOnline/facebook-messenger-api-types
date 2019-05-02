import Button from "./buttons/Button";

type PersistentMenuItem = {
      call_to_actions: PersistentMenuItem[];
      title: string;
      type: 'nested';
    }
  | Button;

export default PersistentMenuItem;
