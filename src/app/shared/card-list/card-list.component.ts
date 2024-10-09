import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CardItemComponent } from '../card-item/card-item.component';
import { ItemEntity } from '../../core/entities/item.entity';
import { ItemService } from '../../core/services/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchText = '';
  itens: ItemEntity[] = [];
  filteredItems: ItemEntity[] = [];
  itensSubscription?: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itensSubscription = this.itemService.findItens().subscribe({
      next: (res) => {
        this.itens = res;
        this.filterItems();
      },
      error: (err) => console.error(err),
    })
  }

  ngOnChanges(): void {
    this.filterItems();
  }

  ngOnDestroy(): void {
    if (this.itensSubscription) this.itensSubscription.unsubscribe();
  }

  filterItems(): void {
    if (!this.searchText) {
      this.filteredItems = this.itens;
    } else {
      this.filteredItems = this.itens.filter(item =>
        item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  handleDelete(item: ItemEntity): void {
    this.itens = this.itens.filter(i => i !== item);
    this.filterItems();
  }
}