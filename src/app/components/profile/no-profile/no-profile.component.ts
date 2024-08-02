import { Component } from '@angular/core';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-no-profile',
  standalone: true,
  imports: [MobileSectionComponent, FooterComponent, HeaderComponent],
  templateUrl: './no-profile.component.html',
  styleUrl: './no-profile.component.css',
})
export class NoProfileComponent {}
