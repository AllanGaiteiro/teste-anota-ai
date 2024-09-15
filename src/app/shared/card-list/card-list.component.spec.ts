import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { CardListComponent } from './card-list.component';
import { ItemService } from '../../core/services/item.service';
import { ItemEntity } from '../../core/entities/item.entity';
import { CardItemComponent } from '../card-item/card-item.component';
import { By } from '@angular/platform-browser';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;
  let itemServiceSpy: jasmine.SpyObj<ItemService>;

  const mockItems: ItemEntity[] = [
    { id: 1, title: 'Item 1', description: 'Description 1', type: '2', img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-01.jpg' },
    { id: 2, title: 'Item 2', description: 'Description 2', type: '2', img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-01.jpg' },
    { id: 3, title: 'Item 3', description: 'Description 3', type: '2', img: 'https://githubanotaai.github.io/frontend-interview-mock-data/assets/img-test-01.jpg' },
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ItemService', ['findItens']);

    await TestBed.configureTestingModule({
      imports: [CardListComponent, CardItemComponent],
      providers: [{ provide: ItemService, useValue: spy }],
    }).compileComponents();

    itemServiceSpy = TestBed.inject(ItemService) as jasmine.SpyObj<ItemService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch items on init and filter them correctly', () => {
    // Mock the item service to return the mock items
    itemServiceSpy.findItens.and.returnValue(of(mockItems));

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.itens).toEqual(mockItems);
    expect(component.filteredItems).toEqual(mockItems); // No filter applied initially

    // Set searchText and trigger ngOnChanges
    component.searchText = 'Item 1';
    component.ngOnChanges();
    expect(component.filteredItems.length).toBe(1);
    expect(component.filteredItems[0].title).toBe('Item 1');
  });

  it('should display the filtered items in the template', () => {
    // Mock the item service to return the mock items
    itemServiceSpy.findItens.and.returnValue(of(mockItems));

    fixture.detectChanges(); // Trigger ngOnInit

    // Check if the filtered items are correctly rendered in the template
    const cardItems = fixture.debugElement.queryAll(By.css('app-card-item'));
    expect(cardItems.length).toBe(3); // All items should be displayed
  });

  it('should delete an item and update the list', () => {
    itemServiceSpy.findItens.and.returnValue(of(mockItems));
    fixture.detectChanges();

    const itemToDelete = mockItems[0];
    component.handleDelete(itemToDelete);

    expect(component.itens.length).toBe(2);
    expect(component.filteredItems.length).toBe(2);
    expect(component.filteredItems).not.toContain(itemToDelete);
  });

  it('should handle service error correctly', () => {
    const consoleSpy = spyOn(console, 'error');
    itemServiceSpy.findItens.and.returnValue(throwError(() => new Error('Service error')));

    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith(new Error('Service error'));
    expect(component.itens.length).toBe(0);
  });
});
