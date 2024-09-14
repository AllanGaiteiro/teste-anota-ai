import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { PageListComponent } from './pages/page-list/page-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-anota-ai';
}
