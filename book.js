class Book{
    constructor(title, author, dop, publisher){
        this.title = title;
        this.author = author;
        this.dop = dop;
        this.publisher = publisher;
    }

    toString() {
        const card = 'Titolo: ' + this.title + '\n' + 'Autore: ' + this.author + '\n' + 'Data di pubblicazione: ' + this.dop + '\n' + 'Casa editrice: ' + this.publisher + '\n';
        
        return card;
    }
}