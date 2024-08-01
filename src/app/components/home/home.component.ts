import { Component } from '@angular/core';
import { MobileSectionComponent } from '../mobile-section/mobile-section.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TransactionsComponent } from '../transactions/transactions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MobileSectionComponent,
    FooterComponent,
    HeaderComponent,
    TransactionsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
