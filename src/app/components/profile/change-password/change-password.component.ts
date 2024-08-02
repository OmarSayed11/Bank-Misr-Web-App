import { Component } from '@angular/core';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    MobileSectionComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {}
