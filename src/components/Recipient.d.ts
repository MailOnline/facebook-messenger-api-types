interface Recipient {
  id: string; // <PSID, phone_number or user_ref>
  phone_number?: string;
  user_ref?: string;
  name?: {
    first_name: string;
    last_name: string;
  };
}

export default Recipient;
