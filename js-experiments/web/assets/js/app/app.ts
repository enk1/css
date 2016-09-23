import books = require('./models/books');

export class App {
    private booksList:Array<any>;

    constructor() {
        var data = new books.Books();
        this.booksList = data.getData();
        console.log(this.booksList);
    }
    show() {
        //console.log(123);
    }
}