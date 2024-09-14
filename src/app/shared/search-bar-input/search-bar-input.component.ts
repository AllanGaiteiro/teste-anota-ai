import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-bar-input',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-bar-input.component.html',
  styleUrl: './search-bar-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarInputComponent { }
