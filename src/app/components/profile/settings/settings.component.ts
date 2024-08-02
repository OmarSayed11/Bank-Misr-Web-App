import { Component } from '@angular/core';
import { MobileSectionComponent } from '../../homeScreen/mobile-section/mobile-section.component';
import { FooterComponent } from '../../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MobileSectionComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {}
