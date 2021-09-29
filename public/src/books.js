function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let checkedOut = books.filter(book => book.borrows.some(borrow => !borrow.returned))
  let returned = books.filter(book => book.borrows.every(borrow => borrow.returned))
  result.push(checkedOut, returned)
  return result
}

function getBorrowersForBook(book, accounts) {
  // needs to return the array of objects for the accounts for that specific book. Also, it will include whether or not the book is returned. 
  return book.borrows.map(borrow => {
    let account = accounts.find(user => user.id === borrow.id) // find the matching user id
    return {...borrow, ...account} //combine user id with the borrow transaction object
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
