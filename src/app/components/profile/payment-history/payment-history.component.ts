import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [
    FooterComponent,
    MobileSectionComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.css',
})
export class PaymentHistoryComponent {}
