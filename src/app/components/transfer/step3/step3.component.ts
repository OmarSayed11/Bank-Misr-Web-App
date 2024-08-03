import { Component } from '@angular/core';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [MobileSectionComponent, FooterComponent, HeaderComponent],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css',
})
export class Step3Component {}
