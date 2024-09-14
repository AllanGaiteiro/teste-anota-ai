import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderTitleComponent } from '../header-title/header-title.component';
import { HeaderNameComponent } from '../header-name/header-name.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,HeaderLogoComponent,HeaderTitleComponent,HeaderNameComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
