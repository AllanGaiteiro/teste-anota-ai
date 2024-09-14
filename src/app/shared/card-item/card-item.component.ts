import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../card-list/Item';
import { CardItemTitleComponent } from '../card-item-title/card-item-title.component';
import { CardItemDescriptionComponent } from '../card-item-description/card-item-description.component';
import { CardItemTypeComponent } from '../card-item-type/card-item-type.component';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,CardItemTitleComponent,CardItemDescriptionComponent,CardItemTypeComponent
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemComponent {
  @Input() item?: Item;

}
