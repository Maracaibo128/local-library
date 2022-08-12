function findAuthorById(authors, id) {
  //just have to use find
  let authorObject = authors.find((author) => author.id === id)
  return authorObject;
  
}

function findBookById(books, id) {
  //same as above, just different array
  let bookObject = books.find((book) => book.id === id)
  return bookObject;
}

function partitionBooksByBorrowedStatus(books) {
  
 const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter ((book) => !book.borrows[0].returned);
  return [unreturned, returned];   
}
  
function getBorrowersForBook(book, accounts) {
 return book.borrows.map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
