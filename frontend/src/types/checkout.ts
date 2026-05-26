export interface Address {
  name: string;
  phone: string;
  addressLine: string;
}

export type PaymentMethod = "COD" | "ONLINE";

export interface CheckoutData {
  address: Address;
  paymentMethod: PaymentMethod;
}