import { ContainsSearchResultPipe } from './common/pipes/filter-movie.pipe';
import { HighlightPipe } from './common/pipes/highlight.pipe';
import { OrderMoviesByPipe } from './common/pipes/order-movies-by.pipe';
import { MoviesService } from './common/services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
    declarations: [
        AppComponent,
        MoviesListComponent,
        OrderMoviesByPipe,
        HighlightPipe,
        ContainsSearchResultPipe
    ],
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule
    ],
    providers: [
        MoviesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
