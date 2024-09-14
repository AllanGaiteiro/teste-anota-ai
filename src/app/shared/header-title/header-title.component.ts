import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Teste de Desenvolvedor Front-End - Anota AI</p>`,
  styleUrl: './header-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent { }
