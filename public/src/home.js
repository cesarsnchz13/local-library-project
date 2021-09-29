function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let count = 0
  books.forEach(book => {
    if(book.borrows.some(borrow => borrow.returned === false)){
    count++
    }
  })
  return count
}

function getMostCommonGenres(books) {
  //first, got an array of just the genres of each book.
const genres = books.map(book=> book.genre)
// went through the array to create objects with the count of each genre
let commonGenres = genres.reduce((acc, genre) => {
  if(!acc[genre]){
    acc[genre] = {name: genre, count: 0}
  }
  acc[genre].count++
  return acc
} , [])
//returning the array with maximum 5 objects, and in descending order.
return Object.values(commonGenres).sort((genreA, genreB) => genreB.count - genreA.count).splice(0,5)
}

function getMostPopularBooks(books) {
  let result = books.reduce((acc, book) => {
    acc[book.title] = {name: book.title, count: book.borrows.length}
    return acc
  }, [])
  return Object.values(result).sort((countA, countB) => countB.count - countA.count).splice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let result = []
  authors.forEach(author =>{
    let authorCount = {name: `${author.name.first} ${author.name.last}`, count: 0}
    books.forEach(book => {
      if(author.id === book.authorId){
        authorCount.count += book.borrows.length
      }
    })
    result.push(authorCount)
  })
 return result.sort((countA, countB) => countB.count - countA.count).splice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
