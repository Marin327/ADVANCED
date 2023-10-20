class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
addBook(bookName, bookAuthor) {
    if(this.capacity === this.books.length) {
        throw Error("Not enough space in the collection.");
    }
    this.books.push({
        bookName,
         bookAuthor, 
         paid: false,
    });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
}

payBook(bookName) {
    for(const book of this.books) {
        if(book.bookName === bookName) {
  if(book.paid) {
    throw Error(`${bookName} has already been paid.`);
  } else {
    book.paid = true;
    return `${bookName} has been successfully paid.`;
    } 
   }
  }
  throw Error(`${bookName} is not in the collection.`);
 }

 removeBook(bookName) {
    for(let index = 0; index < this.books.length; index++) {
        const element = this.books[index];
        if(element.bookName === bookName) {
         if(!element.paid) {
            throw Error(`${bookName} need to be paid before removing from the collection.`);
         } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`;
         }
       }
    }
        throw Error("The book, you're looking for, is not found.");
    }

    getStatistics(bookAuthor) {
        if(bookAuthor === undefined) {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            let sortedBooks = this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            for(const book of sortedBooks) {
                result += `\n${book.bookName} == ${book.bookAuthor} - ${book.paid ? "Has Paid" : "Not Paid"}.`;
            }
        
            return result;
        }
 
        let result = [];
        for(const book of this.books) {
            if(book.bookAuthor === bookAuthor) {
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid ? "Has Paid" :"Not Paid"}.`);
            }
            return result.join("n");
        }
        throw Error(`${bookAuthor} is not in the collection.`);
    }
}

const library = new LibraryCollection(5) 
library.addBook('Don Quixote', 'Miguel de Cervantes'); 
library.payBook('Don Quixote'); 
library.addBook('In Search of Lost Time', 'Marcel Proust'); 
library.addBook('Ulysses', 'James Joyce'); 
console.log(library.getStatistics());

// The book collection has 2 empty spots left.

// Don Quixote == Miguel de Cervantes - Has Paid.

// In Search of Lost Time == Marcel Proust - Not Paid.

// Ulysses == James Joyce - Not Paid.

///
console.log("-----------");

//

class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = {};
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) {
            throw new Error('Not enough space in the collection.');
        }
        this.books[bookName] = {author: bookAuthor, payed: false};
        this.capacity--;
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        if (!this.books.hasOwnProperty(bookName)) throw new Error(`${bookName} is not in the collection.`)
        if (this.books[bookName].payed) throw new Error(`${bookName} has already been paid.`);

        this.books[bookName].payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        if (!this.books.hasOwnProperty(bookName)) throw new Error('The book, you\'re looking for, is not found.')
        if (!this.books[bookName].payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);

        delete this.books[bookName].payed;
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            const result = Object.entries(this.books)
                .filter(([name, {author, payed}]) => author.localeCompare(bookAuthor) === 0);
            if (result.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                return result
                    .sort(([name1, value1], [name2, value2]) => name1.localeCompare(name2))
                    .map(([name, {author, payed}]) => `${name} == ${author} - ${payed ? 'Has Paid' : 'Not Paid'}.`)
                    .join('\n');
            }
        } else {
            return `The book collection has ${this.capacity} empty spots left.\n` +
                Object.entries(this.books)
                    .sort(([name1, value1], [name2, value2]) => name1.localeCompare(name2))
                    .map(([name, {author, payed}]) => `${name} == ${author} - ${payed ? 'Has Paid' : 'Not Paid'}.`)
                    .join('\n');
        }
    }
}