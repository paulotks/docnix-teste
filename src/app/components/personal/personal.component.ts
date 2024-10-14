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
  selector: 'app-personal',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, InputComponent, FloatLabelModule, ButtonModule, InputCalenderComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent implements OnInit {
  personalForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: CustomerRegistrationDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      surname: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      birthDate: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]] ,
      email: ['', [Validators.required, Validators.email]],
    });

    const personalData = this.registrationService.getPersonalData();
    if (personalData) {
      this.personalForm.patchValue(personalData);
    }
  }

  savePersonalData() {
    console.log(this.personalForm);
    debugger;
    if (this.personalForm.valid) {
      const personalData: PersonalData = this.personalForm.value;
      this.registrationService.setPersonalData(personalData);
      this.router.navigate(['register/address'])
    }
  }

}
