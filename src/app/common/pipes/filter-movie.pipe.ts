import { Movie } from './../models/movie.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'containsSearchResult'
})
export class ContainsSearchResultPipe implements PipeTransform {

    transform(movies: Movie[], search?: string) {
        if (!search) {
            return movies;
        }
        return movies.filter((movie) => {
            let result = false;
            Object.keys(movie).map(function (key, index) {
                const value = movie[key];

                if (typeof value !== 'string') {
                    return false;
                }

                let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

                pattern = pattern.split(' ').filter((t) => {
                    return t.length > 0;
                }).join('|');

                const regex = new RegExp(pattern, 'gi');
                const match = regex.test(value);

                if (match) {
                    result = true;
                }
            });

            return result;
        });
    }
}
