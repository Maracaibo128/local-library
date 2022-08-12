function getTotalBooksCount(books) {
  //pretty straightforward, just use .length
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //same as above, just with a different array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //i need to go loop through the array of book objects, and then each book object's borrows array
  let borrowedCount = books.filter((book) => 
                                   book.borrows.filter((transaction) => 
                                                       transaction.returned === false).length > 0);
  //since filter creates a new array i get to use good ol .length
return borrowedCount.length;
}



  //i will have to use .map to create the items for a new array
  //i start by looping over the books array with the forEach method 
  // each book object has a genre key.  i need to count the number of times each genre appears
  function getMostCommonGenres(books) {
  //let map be assigned to this empty object for now
  let map = {};
// i'm going to fill this object with elements that have genre keys pointing to a number, 
// which i can increment every time i check for the genre
  books.forEach((element) => {
    
    if (map[element.genre]) {
      map[element.genre]++;
    } else {
      map[element.genre] = 1;
    }
    
  })
  //since .map method acts on arrays, i'll use object.entries
  // to turn the map object above into an array
  return Object.entries(map).map(([name, count]) => {
    return {
      name,
      count
    };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}


function getMostPopularBooks(books) {
  //all i need from the books array are the name keys of each book object, and the number of times each book object's been borrowed, AKA, the length of the elements from its borrows array.  so when i use .map on books, i can take those title keys
//and use them for my name keys and .length on the borrows to get a number for my count.
  return books.map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  //again, .sort will let me arrange them the way i need, and .slice will limit them to five
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  
  let result = [];
 
  //each of these objects in the authors arrays has a key that points to another object for their first and last names, stored in two separate keys, called "first" and "last".  i need both of those for my "name" key that i am going to make, so in the function that i pass to the forEach, i'll use a template literal to get those values into one string.  the count will be zero for now.
  authors.forEach((author) => {
  
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
  };
    
  //once i have all my author names, i can loop through the books array and check for where book.authorId is equal to author.id, then get the .length of the book.borrows for my count if they do.
    
    books.forEach((book) => {
      if (book.authorId === author.id) 
      {
        theAuthor.count += book.borrows.length;
      }
  });
    
  result.push(theAuthor);
    
 });
  
 return result.sort((a, b) => b.count - a.count).slice(0, 5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
