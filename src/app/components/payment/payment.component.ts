import { PaymentData, RegistrationData } from './../../models/customer-registration-data.model';
import { CustomerRegistrationDataService } from './../../service/customer-registration-data.service';
import { Component, OnInit } from '@angular/core';
import { PersonalData } from '../../models/customer-registration-data.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputComponent } from '../input/input.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputCalenderComponent } from '../input-calender/input-calender.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, InputComponent, FloatLabelModule, ButtonModule, InputCalenderComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  paymentForm!: FormGroup;

  constructor(    
    private formBuilder: FormBuilder,
    private registrationService: CustomerRegistrationDataService,
    private router: Router,) {
  }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      cardNumber: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      nameOnCard: [null, [Validators.required, Validators.maxLength(10)]],
      expiryDate: [null, Validators.required],
      cvv: [null, [Validators.required,]],
    });

    const paymentForm = this.registrationService.getPaymentData();
    if (paymentForm) {
      this.paymentForm.patchValue(paymentForm);
    }
  }

  savePaymentData() {
    if (this.paymentForm.valid) {
      const PaymentlData: PaymentData = this.paymentForm.value;
      this.registrationService.setPaymentData(PaymentlData);

      //validação fraca

      const getRegistrationData = this.registrationService.getRegistrationData()
      if(getRegistrationData.personal.cpf && getRegistrationData.address.cep) {
        this.router.navigate(['register/credit-analysis']);
      }
    }
  }

  returnStep() {
    this.router.navigate(['register/address']);

  }

}
