import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { HeaderComponent } from './shared/header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HeaderComponent, PageListComponent,],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app-header', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app-page-list', () => {
    const fixture = TestBed.createComponent(PageListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
