import { CustomerRegistrationDataService } from './../../service/customer-registration-data.service';
import { Component, OnInit } from '@angular/core';
import { AddressData, PersonalData } from '../../models/customer-registration-data.model';
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
  selector: 'app-addres',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, InputComponent, FloatLabelModule, ButtonModule, InputCalenderComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddresComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(    
    private formBuilder: FormBuilder,
    private registrationService: CustomerRegistrationDataService,
    private router: Router,) {
  }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      cep: [null, [Validators.required,]], //criar validador de cep
      address: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      number: [null, [Validators.required, Validators.maxLength(10)]],
      district: [null, Validators.required],
      city: [null, [Validators.required,]],
      state: [null, [Validators.required,]],
    });

    const addressForm = this.registrationService.getAddressData();
    if (addressForm) {
      this.addressForm.patchValue(addressForm);
    }
  }

  saveAddressData() {
    if (this.addressForm.valid) {
      const addresslData: AddressData = this.addressForm.value;
      this.registrationService.setAddressData(addresslData);
      this.router.navigate(['register/payment']);
    }
  }

  returnStep() {
    this.router.navigate(['register/personal']);

  }

}
