import { Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AddresComponent } from './components/addres/addres.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CreditAnalysisComponent } from './components/credit-analysis/credit-analysis.component';

export const routes: Routes = [
  {
    path: 'register',
    component: CustomerRegistrationComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent },
      { path: 'address', component: AddresComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'credit-analysis', component: CreditAnalysisComponent },
    ],
  },
  { path: '', redirectTo: '/register/personal', pathMatch: 'full' },
];
