// helper function
function findItemById(array, id){
  return array.find((arrayItem) => arrayItem.id === id );
}

function findAuthorById(authors, id) {
  //just have to use my helper
return findItemById(authors, id);
}

function findBookById(books, id) {
  //same as above, just different array
  return findItemById(books, id)
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
  findItemById,
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
