import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./header-logo.component.html`,
  styleUrl: './header-logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLogoComponent { }
