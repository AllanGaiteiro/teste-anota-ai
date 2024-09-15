import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, AfterViewInit } from '@angular/core';
import { ItemEntity } from '../../core/entities/item.entity';
import { CardItemTitleComponent } from '../card-item-title/card-item-title.component';
import { CardItemDescriptionComponent } from '../card-item-description/card-item-description.component';
import { CardItemTypeComponent } from '../card-item-type/card-item-type.component';
import { CardItemDeleteComponent } from '../card-item-delete/card-item-delete.component';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule, CardItemTitleComponent, CardItemDescriptionComponent, CardItemTypeComponent, CardItemDeleteComponent
  ],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardItemComponent implements AfterViewInit {
  @Input() item?: ItemEntity;
  @Output() delete = new EventEmitter<ItemEntity>();
  lazyImage: string = ''; 
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.observeElement();
  }

  observeElement() {
    const target = this.el.nativeElement.querySelector('.card-item-header');
    if (target) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.lazyImage = this.item?.img || '';
            if (this.lazyImage) target.style.backgroundImage = `url(${this.lazyImage})`;
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(target);
    } else {
      console.error('Element not found');
    }
  }


  onDelete(): void {
    this.delete.emit(this.item);
  }
}
