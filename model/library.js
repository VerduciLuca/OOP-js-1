class Library {
    constructor(publications = []){
        this.publications = publications;
    }

    addPublication(pub) {
        this.publications.push(pub)
    }

    deletePublication (index){
        // this.publications = this.publications.filter((_,i)=>i !== index)
        this.publications.splice(index,1);
    }

    getAllBookCards(){
        let allCards= ''
        for (let i = 0; i < this.publications.length; i++) {
        const pub = this.publications[i];
        const humanIndex = i+1
        allCards += humanIndex+') '+ pub.toString()
        allCards += '-----------------\n'
        }
        return allCards
    }

    fromDbObjects (data){
        for (const genericObj of data) {
            const book = new Book (genericObj.title,genericObj.author,genericObj.dop,genericObj.publisher)
            this.publications.push(book)
                }
    }
}
