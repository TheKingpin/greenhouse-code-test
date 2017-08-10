export interface IMovie {
    id: string;
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    rt_score: string;
    url: string;
    locations: string[];
    people: string[];
    species: string[];
    vehicles: string[];
}

export class Movie implements IMovie {

    public id: string;
    public title: string;
    public description: string;
    public director: string;
    public producer: string;
    public release_date: string;
    public rt_score: string;
    public url: string;
    public locations: string[];
    public people: string[];
    public species: string[];
    public vehicles: string[];

    constructor(movie: any) { }
}
