import { Movie } from './../common/models/movie.model';
import { MoviesService } from './../common/services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ght-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

    public movies: Movie[];
    public sortBy = 'title';
    public filter: any;
    public reverse = false;

    constructor(public moviesService: MoviesService) { }

    ngOnInit() {
        this.moviesService.getMovies()
            .then(movies => {
                this.movies = movies;
            });
    }

    public sort(property: string) {
        if (property === this.sortBy) {
            this.reverse = !this.reverse;
        } else {
            this.reverse = false;
            this.sortBy = property;
        }
    }

    public isActive(property: string): boolean {
        return property === this.sortBy;
    }
}
