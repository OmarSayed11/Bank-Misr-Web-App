import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [FooterComponent, MobileSectionComponent, HeaderComponent],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.css',
})
export class MoneyTransferComponent {}
