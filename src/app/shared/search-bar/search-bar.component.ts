import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBarInputComponent } from '../search-bar-input/search-bar-input.component';
import { SearchBarIconComponent } from '../search-bar-icon/search-bar-icon.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,SearchBarInputComponent,SearchBarIconComponent
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent { }
