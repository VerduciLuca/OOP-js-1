// console.log("oop");

// // const book1 = {
// //     title: 'iliade',
// //     author: ['omero'],
// //     dop: '27/12/2009',
// //     publisher: 'einaudi'
// // }

// const book2 = new Book("odissea", "omero", "27/12/2010", "einaudi");
// const book3 = new Book(
//     "la divina commedia",
//     "dante",
//     "27/02/1998",
//     "feltrinelli"
// );

// // console.log(book1);
// // console.log(book2);

// // console.log(book1.title);
// // console.log(book2.title);

// // console.log(book1['author']);
// // console.log(book2['author']);

// // function getBookCard(book) {
// //     const card = 'Titolo: ' + book.title + '\n' + 'Autore: ' + book.author + '\n' + 'Data di pubblicazione: ' + book.dop + '\n' + 'Casa editrice: ' + book.publisher + '\n';

// //     return card;
// // }
// // console.log(getBookCard(book1));

// // console.log(book2.toString());
// // console.log(book3 + '');
// // console.log(book3.getUpperTitle());

// const magazine1 = new Magazine("opera oggi", "12/6/2023", "fabbri", 23);

// // console.log(magazine1.toString());
// // console.log(magazine1.getUpperTitle());

// const pub1 = new Publication("pubblicazione1", "12/6/2020", "fabbri");

// // console.log(pub1.toString());
// // console.log(pub1.getUpperTitle());

// const schoolB1 = new SchoolBook(
//     "matematicando",
//     "daniele petrelli",
//     "23/04/2013",
//     "zanichelli",
//     "matematica",
//     "terza media"
// );

// // console.log(schoolB1.toString());
// // console.log(schoolB1.getUpperTitle());

// // const libraryCollection = [book2, book3, magazine1, schoolB1];

// // for (const pub of libraryCollection) {
// //     console.log(pub1.toString());
// // }

// const library1= new Library ([book2,book3,magazine1,schoolB1]);

// library1.deletePublication(3)

// const book4 = new Book ('se questo è un uomo', 'primo levi', '12/05/1998', 'adephi')

// library1.addPublication(book4)

// console.log(library1);

const gui = new GUI ();

gui.start()


// /// JSON --------------------------------------------------------------------------------------------------------------------------------------------------------------

// const student = {
//     name: "Bryan",
//     yob: 1994,
//     isMarried: false,
// };

// console.log(student);

// const student1JSON = JSON.stringify(student);

// console.log(student1JSON);

// const stringArray = ["qui", "quo", "qua"];

// const stringArrayJSON = JSON.stringify(stringArray);

// console.log(stringArrayJSON);

// const  student2 = {
//     name:'Francesca',
//     yob: 1989,
//     isMarried: false
// }

// const studentArray = [student, student2]

// const studentArrJSON= JSON.stringify(studentArray)

// console.log(studentArrJSON);

// const jsonString = '[{"name":"Bryan","yob":1994,"isMarried":false},{"name":"Francesca","yob":1989,"isMarried":false}]'

// const studentsArray = JSON.parse(jsonString);

// console.log(studentsArray);