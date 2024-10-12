import { CustomerRegistrationDataService } from './../../service/customer-registration-data.service';
import { Component, OnInit } from '@angular/core';
import { PersonalData } from '../../models/customer-registration-data.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
})
export class PersonalComponent implements OnInit {
  personalData: PersonalData = {
    name: '',
    surname: '',
    cpf: '',
    birthDate: '',
    phone: '',
    email: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: CustomerRegistrationDataService
  ) {}

  ngOnInit() {
    this.personalData = this.registrationService.getPersonalData();
  }

  savePersonalData() {
    this.registrationService.setPersonalData(this.personalData);
  }
}
