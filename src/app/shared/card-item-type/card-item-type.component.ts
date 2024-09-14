import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item-type',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p *ngIf="getTypeName()" [class]="getTypeClass()">{{getTypeName()}}</p>`,
  styleUrl: './card-item-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemTypeComponent {
  @Input() type?: string;

  typeNames = [
    { id: '1', name: 'Paisagem' },
    { id: '2', name: 'Flor' },
    { id: '3', name: 'Pizza' },
  ];

  getTypeName(): string | null {
    return this.typeNames.find(t => t.id === this.type)?.name || null;
  }
  getTypeClass(): string {
    const typeObj = this.typeNames.find(t => t.id === this.type);
    if (typeObj) return `card-item-type-${typeObj.id}`;
    return 'card-item-type';
  }
}
