type UserInfoField = 'contact_email' | 'contact_name' | 'contact_phone' | 'shipping_address';

interface PriceListItem {
  amount: string;
  label: string;
}

export interface BuyButton {
  payload: string;
  payment_summary: {
    currency: string;
    is_test_payment: boolean;
    merchant_name: string;
    payment_type: 'FIXED_AMOUNT' | 'FLEXIBLE_AMOUNT';
    requested_user_info: UserInfoField[];
  };
  price_list: PriceListItem[];
  title: string;
  type: 'payment';
}
