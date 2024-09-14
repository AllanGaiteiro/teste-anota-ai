import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-description',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p *ngIf="description" class="card-item-description">{{description}}</p>`,
  styleUrl: './card-item-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemDescriptionComponent {
  @Input() description?: string;
}
