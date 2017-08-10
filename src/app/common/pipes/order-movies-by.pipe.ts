import { Movie } from './../models/movie.model';
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderMoviesByPipe implements PipeTransform {
    transform(items: Movie[], property?: string): Array<any> {

        if (!property) {
            property = 'title';
        }
        items.sort((a: Movie, b: Movie) => {
            if (a[property] < b[property]) {
                return -1;
            } else if (a[property] > b[property]) {
                return 1;
            } else {
                return 0;
            }
        });

        return items;
    }
}
