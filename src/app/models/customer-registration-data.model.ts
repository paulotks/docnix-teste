export interface PersonalData {
  name: string;
  surname: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
}

export interface AddressData {
  cep: string;
  address: string;
  number: string;
  district: string;
  state: string;
  city: string;
}

export interface PaymentData {
  method: string;
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvc: string;
}

export interface RegistrationData {
  personal: PersonalData;
  address: AddressData;
  payment: PaymentData;
}
