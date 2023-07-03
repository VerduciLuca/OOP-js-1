class Publication{
    constructor(title, dop, publisher){
        this.title = title;
        this.dop = dop;
        this.publisher = publisher;
    }

    toString() {
        const card = 'Titolo: ' + this.title + '\n' + 'Data di pubblicazione: ' + this.dop + '\n' + 'Casa editrice: ' + this.publisher + '\n';
        
        return card;
    }
}