function findAccountById(accounts, id) {
  //i need to filter my accounts dataset to match this id. 
  let result = accounts.find((account)=> account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  ///review the sort method chapter for this one
  let sortedArray = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return sortedArray;}

function getTotalNumberOfBorrows(account, books) {
  // create a variable for the id in account using destructuring
     const {id: accountId} = account;
  // use the reduce method on books, to accumulate total number of borrows.
    return books.reduce((accumulator, book) => {
      return ( accumulator + book.borrows.filter(borrow => borrow.id === accountId).reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0));}, 0);
}


function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
