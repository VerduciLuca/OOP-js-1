class Book{
    constructor(title, author, dop, publisher){
        super(title, dop, publisher);
        this.author = author;
    }

    toString() {
        const card = 'Titolo: ' + this.title + '\n' + 'Autore: ' + this.author + '\n' + 'Data di pubblicazione: ' + this.dop + '\n' + 'Casa editrice: ' + this.publisher + '\n';
        
        return card;
    }

    getUpperTitle() {
        const upperTitle = this.title.toUpperCase();

        return upperTitle;
    }
}