import { Injectable } from '@angular/core';
import {
  AddressData,
  PaymentData,
  PersonalData,
  RegistrationData,
} from '../models/customer-registration-data.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerRegistrationDataService {
  constructor() {}

  private registrationData: RegistrationData = {
    personal: {
      name: '',
      surname: '',
      cpf: '',
      birthDate: '',
      phone: '',
      email: '',
    },
    address: {
      cep: '',
      address: '',
      number: '',
      district: '',
      state: '',
      city: '',
    },
    payment: {
      cardNumber: '',
      nameOnCard: '',
      expiryDate: '',
      cvv: '',
    },
  };

  setPersonalData(data: PersonalData) {
    this.registrationData.personal = data;
  }

  getPersonalData(): PersonalData {
    return this.registrationData.personal;
  }

  setAddressData(data: AddressData) {
    this.registrationData.address = data;
  }

  getAddressData(): AddressData {
    return this.registrationData.address;
  }

  setPaymentData(data: PaymentData) {
    this.registrationData.payment = data;
  }

  getPaymentData(): PaymentData {
    return this.registrationData.payment;
  }

  getRegistrationData(): RegistrationData {
    return this.registrationData;
  }

}
