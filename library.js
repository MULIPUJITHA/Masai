class Book {
  static totalBooks = 0; // Static property to track total books

  constructor(title, author, year, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.year = year;
    this._isAvailable = isAvailable; // Private property
    Book.totalBooks++; // Increment total books count
  }

  // Static method to display total books
  static showTotalBooks() {
    console.log(`Total books in the library: ${Book.totalBooks}`);
  }

  // Getter for isAvailable
  get isAvailable() {
    return this._isAvailable;
  }

  // Setter for isAvailable
  set isAvailable(status) {
    this._isAvailable = status;
  }

  // toString method to display book details
  toString() {
    return `${this.title} by ${this.author} (${this.year}) - ${this.isAvailable ? "Available" : "Not Available"}`;
  }
}

// Subclass EBook extending Book
class EBook extends Book {
  constructor(title, author, year, fileSize, isAvailable = true) {
    super(title, author, year, isAvailable); // Call parent class constructor
    this.fileSize = fileSize; // Additional property
  }

  // Method to simulate downloading the eBook
  download() {
    console.log(`Downloading "${this.title}"...`);
  }

  // Overriding the toString method
  toString() {
    return `${this.title} by ${this.author} (${this.year}) - File Size: ${this.fileSize}MB - ${this.isAvailable ? "Available" : "Not Available"}`;
  }
}

// Library Usage Example

// Create Book instances
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949, false);
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);

// Create EBook instances
const ebook1 = new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 2);
const ebook2 = new EBook("Moby Dick", "Herman Melville", 1851, 5, false);

// Display total books using the static method
Book.showTotalBooks();

// Display details of all books
console.log("\nBook Details:");
console.log(book1.toString());
console.log(book2.toString());
console.log(book3.toString());
console.log(ebook1.toString());
console.log(ebook2.toString());

// Change availability of a book
book2.isAvailable = true;
console.log(`\nUpdated Availability of "${book2.title}": ${book2.isAvailable}`);

// Call the download method for eBooks
console.log("\nEBook Downloads:");
ebook1.download();
ebook2.download();
