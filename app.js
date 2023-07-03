console.log('oop');

const book1 = {
    title: 'iliade',
    author: ['omero'],
    dop: '27/12/2009',
    publisher: 'einaudi'
}

const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi');
const book3 = new Book('la divina commedia', 'dante', '27/02/1998', 'feltrinelli');

console.log(book1);
console.log(book2);

console.log(book1.title);
console.log(book2.title);

console.log(book1['author']);
console.log(book2['author']);

function getBookCard(book) {
    const card = 'Titolo: ' + book.title + '\n' + 'Autore: ' + book.author + '\n' + 'Data di pubblicazione: ' + book.dop + '\n' + 'Casa editrice: ' + book.publisher + '\n';
    
    return card;
}
console.log(getBookCard(book1));

console.log(book2.toString());
console.log(book3 + '');
console.log(book3.getUpperTitle());

const magazine1 = new Magazine('opera oggi', '12/6/2023', 'fabbri', 23);

console.log(magazine1.toString());
console.log(magazine1.getUpperTitle());

const pub1 = new Publication('pubblicazione1', '12/6/2020', 'fabbri');

console.log(pub1.toString());
console.log(pub1.getUpperTitle());

const school1 = new schoolBook('school1', 'daniele petrelli', '23/04/2013', 'zanichelli', 'matematica', 'terza media');

console.log(school1.toString());