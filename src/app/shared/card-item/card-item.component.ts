import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemEntity } from '../../core/entities/item.entity';
import { CardItemTitleComponent } from '../card-item-title/card-item-title.component';
import { CardItemDescriptionComponent } from '../card-item-description/card-item-description.component';
import { CardItemTypeComponent } from '../card-item-type/card-item-type.component';
import { CardItemDeleteComponent } from '../card-item-delete/card-item-delete.component';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,CardItemTitleComponent,CardItemDescriptionComponent,CardItemTypeComponent,CardItemDeleteComponent
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() item?: ItemEntity;
  @Output() delete = new EventEmitter<ItemEntity>();

  onDelete(): void {
    this.delete.emit(this.item);
  }
}
