import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list.component';
import { CardListComponent } from '../../shared/card-list/card-list.component';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { By } from '@angular/platform-browser';

describe('PageListComponent', () => {
  let fixture: ComponentFixture<PageListComponent>;
  let component: PageListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PageListComponent, CardListComponent, SearchBarComponent],
      providers: [provideHttpClient(withInterceptorsFromDi())],
    }).compileComponents();

    fixture = TestBed.createComponent(PageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app-page-list', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-search-bar component', () => {
    const searchBar = fixture.debugElement.query(By.css('app-search-bar'));
    expect(searchBar).toBeTruthy();
  });

  it('should render the app-card-list component', () => {
    const cardList = fixture.debugElement.query(By.css('app-card-list'));
    expect(cardList).toBeTruthy();
  });

  it('should update searchText when onSearch is called', () => {
    component.onSearch('test search');
    expect(component.searchText).toBe('test search');
  });

  it('should pass searchText to app-card-list', () => {
    component.searchText = 'new search';
    fixture.detectChanges(); // Atualiza a renderização do template

    const cardList = fixture.debugElement.query(By.css('app-card-list'));
    expect(cardList.componentInstance.searchText).toBe('new search');
  });

  it('should call onSearch when search event is emitted from app-search-bar', () => {
    spyOn(component, 'onSearch');

    const searchBar = fixture.debugElement.query(By.css('app-search-bar'));
    searchBar.triggerEventHandler('search', 'query'); // Simula a emissão do evento search

    expect(component.onSearch).toHaveBeenCalledWith('query');
  });
});
