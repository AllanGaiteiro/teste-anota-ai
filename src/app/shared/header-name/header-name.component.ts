import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-name',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./header-name.component.html`,
  styleUrl: './header-name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNameComponent { }
