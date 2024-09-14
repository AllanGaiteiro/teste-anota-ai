import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h2 *ngIf="title" class="card-item-title" > {{ title }}</h2>`,
  styleUrl: './card-item-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemTitleComponent {
  @Input() title?: string;
}
