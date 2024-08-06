import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { TransferComComponent } from '../transferComp/transfer-Comp.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    MobileSectionComponent,
    FooterComponent,
    TransferComComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {}
