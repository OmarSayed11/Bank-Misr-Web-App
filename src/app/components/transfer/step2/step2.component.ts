import { Component } from '@angular/core';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [MobileSectionComponent, FooterComponent, HeaderComponent],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css',
})
export class Step2Component {}
