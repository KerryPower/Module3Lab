const books = [{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },];
//7a
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book.title
}
//7b
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}
//7c
function addGenre(genre) {
    const booksWithGenre = books.map(book => ({
        ...book,
        genre: genre
    }));
    return booksWithGenre
}
