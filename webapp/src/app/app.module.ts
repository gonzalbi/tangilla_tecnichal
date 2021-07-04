import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SynonymTableComponent } from './components/synonym-table/synonym-table.component';
import { TextParserComponent } from './components/text-parser/text-parser.component';

@NgModule({
  declarations: [
    AppComponent,
    SynonymTableComponent,
    TextParserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
