import {Component, Input, OnInit} from '@angular/core';
import {TableContent} from '../table-content';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {

  @Input() tableContent: TableContent;

  constructor() { }

  ngOnInit() {
  }

}
