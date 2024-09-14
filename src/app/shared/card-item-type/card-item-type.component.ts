import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-type',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p *ngIf="type" class="card-item-type">{{type}}</p>`,
  styleUrl: './card-item-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemTypeComponent {
  @Input() type?: string;
}
