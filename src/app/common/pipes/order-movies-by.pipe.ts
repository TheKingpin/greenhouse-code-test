import { Movie } from './../models/movie.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderMoviesBy'
})
export class OrderMoviesByPipe implements PipeTransform {
    transform(movies: Movie[], property?: string, reverse?: boolean): Array<any> {

        console.log('property', property);
        console.log('reverse', reverse);

        if (!movies || movies.length === 0) {
            return [];
        }
        if (!property) {
            property = 'title';
        }

        movies.sort((a: Movie, b: Movie) => {

            let _a: any;
            let _b: any;

            if (property === 'rt_score' || property === 'release_date') {
                _a = parseInt(a[property], 10);
                _b = parseInt(b[property], 10);
            } else {
                _a = a[property];
                _b = b[property];
            }

            if (_a < _b) {
                return -1;
            } else if (_a > _b) {
                return 1;
            } else {
                return 0;
            }
        });

        if (reverse) {
            movies.reverse();
        }

        return movies;
    }
}
