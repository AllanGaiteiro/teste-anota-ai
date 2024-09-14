import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-anota-ai';
}
