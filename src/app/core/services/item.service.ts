import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEntity } from '../entities/item.entity';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  uri = 'https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json';
  constructor(private http: HttpClient) { }

  findItens(): Observable<ItemEntity[]> {
    return this.http.get<ItemEntity[]>(this.uri);
  }
}
