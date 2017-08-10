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
  public sortBy = 'name';

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies()
      .then(movies => {
        this.movies = movies;
      });
  }

}
