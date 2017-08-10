import { OrderMoviesByPipe } from './common/pipes/order-movies-by.pipe';
import { MoviesService } from './common/services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    OrderMoviesByPipe
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
