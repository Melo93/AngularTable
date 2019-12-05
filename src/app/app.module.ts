import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import {PagerService} from './pager.service';
import { FilterPipe } from './generic-table/filter.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    TableComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
