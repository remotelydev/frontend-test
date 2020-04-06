import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'http://localhost:3000/items';

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url)
  } 

  searchItems(term: string): Observable<Item[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      map(result => result.filter(item => item.title.includes(term)))
    );
  }
}
