import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTileComponent } from './book-tile/book-tile.component';
import { BookfilterPipe } from './bookfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookTileComponent,
    BookfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
