class Magazine{
    constructor(title, dop, publisher, issue){
        super(title, dop, publisher);
        this.issue = issue;
    }

    toString() {
        const card = 'Titolo: ' + this.title + '\n' + 'Data di pubblicazione: ' + this.dop + '\n' + 'Casa editrice: ' + this.publisher + '\n' + 'Numero carta: ' + this.issue + '\n';
        
        return card;
    }

    getUpperTitle() {
        const upperTitle = this.title.toUpperCase();

        return upperTitle;
    }
}