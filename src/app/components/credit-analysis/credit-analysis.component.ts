import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerRegistrationDataService } from '../../service/customer-registration-data.service';
import { RegistrationData } from '../../models/customer-registration-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-analysis.component.html',
  styleUrl: './credit-analysis.component.scss'
})
export class CreditAnalysisComponent implements OnInit {
  score!: number;
  classification!: string;
  colorClass!: string;

  constructor(private registrationService: CustomerRegistrationDataService,private router: Router,) {
  }
  
  ngOnInit(): void {
    

    this.redirect();
    
  }

  redirect() {
    const {personal, address, payment} = this.registrationService.getRegistrationData();

    if (!personal.cpf) {
      this.router.navigate(['register/personal']);
      return
    } 
    if (!address.cep) {
      this.router.navigate(['register/address']);
      return
    }
    if (!payment.cvv) {
      this.router.navigate(['register/payment']);
      return
    } else {
      this.generateScore();
      
    }
  }

  generateScore() {
    this.score = Math.floor(Math.random() * 1000);
    this.classifyScore();
  }

  classifyScore() {
    if (this.score < 500) {
      this.classification = 'Inapto';
      this.colorClass = 'red';
    } else if (this.score >= 500 && this.score <= 800) {
      this.classification = 'Apto com Limitações';
      this.colorClass = 'yellow';
    } else {
      this.classification = 'Totalmente Apto';
      this.colorClass = 'green';
    }
  }

}
