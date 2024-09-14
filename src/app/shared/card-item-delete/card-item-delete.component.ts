import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-item-delete',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-item-delete.component.html',
  styleUrl: './card-item-delete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardItemDeleteComponent { 
  svgUri = 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/close.svg';
}
