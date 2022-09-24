const books = [
    {
        id: 1,
        username: 'admin',
        password: 'ado321',
        fname: 'ado',
        lname: 'oda',
        email: 'ado@gmail.com',
        permissionLevel: 2,
    },
    {
        id: 2,
        username: 'yone',
        password: 'kenshi',
        fname: 'kenshi',
        lname: 'yonezu',
        email: 'kenshi@gmail.com',
        permissionLevel: 1,
    }
]

exports.books = books;
// axios.post('http://localhost:8080/books)
// GET /books      => [{ name: 'Pokemon', id: 1}] => books
// GET /books/:id  => { name: 'Pokemon', id: 1} => books.find((book) => book.id ==== req.params.id);
// POST /books     => books.push();
// PUT /books/:id
// DELETE /books/:id 