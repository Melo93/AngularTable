import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableContent} from '../table-content';
import * as _ from 'lodash';
import {PagerService} from '../pager.service';
import {Action} from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {

  @Input() searchBar ? = false;
  @Input() tableContent: TableContent;
  @Output('onClickAction') event = new EventEmitter();
  columnToSearch = '';
  search: string;
  icon = 'sort';
  clicked = false;

  //paginazione
  maxPageNumberSelector: number;
  responsePageObject: any = {};
  paginatedData: any[];
  isPaginated = false;
  lodash = _;


  constructor(private pagerService: PagerService) {
  }

  ngOnInit() {
  }

  setPage(page: number) {
    this.responsePageObject = this.pagerService.getPager(this.tableContent.data.length, page, this.maxPageNumberSelector);
    this.paginatedData = this.tableContent.data.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
  }

  onClickAction(action: Action<any>, model: any, url?: string) {
    this.event.emit({action, model});

  }

  onChange($event: Event) {
    console.log(this.maxPageNumberSelector);
    this.isPaginated = true;
    this.setPage(1);
  }

  orderBy(key: string) {
    if (!this.clicked) {
      if (this.isPaginated) {
        this.paginatedData = this.tableContent.data.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
      }
      this.icon = 'sort-up';
      this.clicked = true;
      this.tableContent.data = _.orderBy(this.tableContent.data, [key], ['asc']);
    } else {
      if (this.isPaginated) {
        this.paginatedData = this.tableContent.data.slice(this.responsePageObject.startIndex, this.responsePageObject.endIndex + 1);
      }
      this.icon = 'sort-down';
      this.clicked = false;
      this.tableContent.data = _.orderBy(this.tableContent.data, [key], ['desc']);
    }
  }
}

