export class Books {
    private booksList:Array<any> = [];
    
    constructor() {
        this.booksList = [{
            id: 1,
            name: 'Limes inferior',
            description: 'sci-fi',
            aothor: 'Janusz Zajdel'
        },{
            id: 2,
            name: 'Hyperion',
            description: 'sci-fi',
            aothor: 'Dan Simmons'
        },{
            id: 3,
            name: 'Game of Thrones',
            description: 'fantasy',
            aothor: 'J. R. R. Martin'
        },{
            id: 4,
            name: 'Harry Potter',
            description: 'fantasy',
            aothor: 'J. K. Rowling'
        },{
            id: 5,
            name: 'Ships of time',
            description: 'sci-fi',
            aothor: 'Stephen Baxter'
        }];
    }

    public getData() {
        return this.booksList;
    }
}