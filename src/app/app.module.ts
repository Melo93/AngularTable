import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
