import { Component, NgZone, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchString: any;

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit() {

    this.searchService.getSearch().subscribe(
      (value) => {
        this.searchString = value;
      }
    );

    this.searchString = localStorage.getItem('search');
  }

}
