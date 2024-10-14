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
import { CustomValidatorsForms } from '../../shared/validators/customValidatorsForms';

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
    private router: Router,
  ) {}

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      surname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      cpf: [null, [Validators.required, CustomValidatorsForms.validateCpf]],
      birthDate: [null, Validators.required],
      phone: [null, [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)]] ,
      email: [null, [Validators.required, Validators.email]],
    });

    const personalData = this.registrationService.getPersonalData();
    if (personalData) {
      this.personalForm.patchValue(personalData);
    }
  }

  savePersonalData() {
    if (this.personalForm.valid) {
      const personalData: PersonalData = this.personalForm.value;
      this.registrationService.setPersonalData(personalData);
      this.router.navigate(['register/address'])
    }
  }

}
