function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last > b.name.last? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = books.filter(book => book.borrows.some(borrow => borrow.id == account.id))
  return total.length
}

function getBooksPossessedByAccount(account, books, authors) {
  //get the array of books that the user currently has checked out
  let result = books.filter(book => book.borrows.find(thisBook => (thisBook.id === account.id && !thisBook.returned)))
  //add the author into the object and into the result array
  result.forEach(book => {
    let thisAuthor = authors.find(author => book.authorId === author.id)
    book["author"] = thisAuthor
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

/* 
let booksBorrowed = books.filter(book => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned))
  let booksWithAuthors = booksBorrowed.forEach(book => {
    let thisAuthor = authors.find(author => book.authorId == author.id)
    book['author'] = thisAuthor
  } )
  return booksWithAuthors
*/ 