import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchString= new Subject<String>();

  constructor() { }
  putSearch(data) {
    this.searchString.next(data);
  }

  getSearch() {
    return this.searchString;
  }
}
