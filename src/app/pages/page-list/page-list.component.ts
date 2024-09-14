import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardListComponent } from '../../shared/card-list/card-list.component';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [
    CommonModule, CardListComponent, SearchBarComponent
  ],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PageListComponent {
  searchText: string = '';

  onSearch(search: string): void {
    this.searchText = search;
  }
}
