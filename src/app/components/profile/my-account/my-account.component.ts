import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [
    FooterComponent,
    MobileSectionComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css',
})
export class MyAccountComponent {}
