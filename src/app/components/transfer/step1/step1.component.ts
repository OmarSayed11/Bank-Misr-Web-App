import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { TransferComComponent } from '../../profile/transferComp/transfer-Comp.component';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MobileSectionComponent,
    TransferComComponent,
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css',
})
export class Step1Component {}
