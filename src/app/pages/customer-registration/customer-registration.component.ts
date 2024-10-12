import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  standalone: true,
  imports: [StepsModule],
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent implements OnInit {
  items!: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Dados Pessoais',
        routerLink: 'personal',
      },
      {
        label: 'Endereço',
        routerLink: 'address',
      },
      {
        label: 'Pagamento',
        routerLink: 'payment',
      },
      {
        label: 'Análise de crédito',
        routerLink: 'credit-analysis',
      },
    ];
  }
}
