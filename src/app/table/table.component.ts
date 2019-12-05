import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Header} from '../header';
import {TableContent} from '../table-content';

import car from '../car.json';
import header from '../header.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  data: any = car;
  header: Header[] = header;
  tableContent: TableContent;

  constructor() {

  }

  ngOnInit() {

    this.tableContent = {
      header: this.header,
      data: this.data
    };

  }


}
