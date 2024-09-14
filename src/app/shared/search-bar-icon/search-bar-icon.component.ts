import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-bar-icon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-bar-icon.component.html',
  styleUrl: './search-bar-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarIconComponent { }
