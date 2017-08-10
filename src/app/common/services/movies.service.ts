import { Movie } from './../models/movie.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MoviesService {

    private apiUrl = 'https://ghibliapi.herokuapp.com/';
    private filmsUrl = 'films';

    constructor(public http: Http) { }

    public getMovies(): Promise<Movie[]> {
        const _callUrl: string = this.apiUrl + this.filmsUrl;

    return this.http.get(_callUrl)
        .toPromise()
        .then((response) => {
            return response.json() as Movie[];
        })
        .catch(this.errorHandler);
  }

    private errorHandler(error): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
