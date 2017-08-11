# Greenhouse Code Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.
In order to get it running, you will need to match [Angular CLI](https://github.com/angular/angular-cli) minimum requirements (Node 6.9.0 or higher and NPM 3 or higher).

There are no external libraries apart from the ones in the CLI, in that way, there is no need to run npm install before running it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Assignment details

The project is a simple list of Studio Ghibli movies. The project does not focus on visual design, instead, is a prototype which explores functionality in order to facilitate and simplfy user interaction. 

The application default ordering is Ascending and by Title. 

Selected column will display blue title and and Ascending/Descending icon.

Once you click at the table header item for the first time, it will re-order the table by the selected property, Ascending. By doing so, a ordering icon will be displayed and the column title (property) will change its color to blue.

Clicking on the same header item for a second time, will re-order the table descending, using the same property.

Search will hightlight the results matching the user's text and it will also hide the table items with no matches.

## HTML

Pretty straight forward, mostly, standard organisation, and the content is properly arranged inside of a table, since is the best element to handle this sort of data organisation. There is a small amount of logic inside the ```movies-list.component.html``` template.

## JS

Most of the component's controllers code are also very simple. Most of the application logic is handled by the ```Pipes```.

## CSS (SCSS)
 
 Personally, I like CSS compressors. Since I am most experinced with SASS, I tried to adapt to this very simple context a bit of my way of doing it. Altought is not necessary to use compressors in a project this size, I did more as a way to show my personal preferences.

 ## Overall

 I have started to write tests, but since this is too simple, I saw no reason to do so. But that would be a must in a project with a lit bit more complexity.

 Since is a small assignment, I tried not to re-invent the wheel. Kept it simple and straight forward, focusing mainly on the ```Pipes``` (or as angular call the filters), since they hold most of the logic to deliver what is requested by the assignment.

My main goal was to make a very clear interface, altought my visual design skills are not the best, the use of space and simplification of the interface are pretty good IMHO.

Please, feel free to ask me anything regarding the test.
