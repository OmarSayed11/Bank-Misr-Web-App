import { Component } from '@angular/core';
import { MobileSectionComponent } from '../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TransactionsComponent } from '../homeScreen/transactions/transactions.component';
import { GettingStartedComponent } from '../homeScreen/getting-started/getting-started.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MobileSectionComponent,
    FooterComponent,
    HeaderComponent,
    TransactionsComponent,
    GettingStartedComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
