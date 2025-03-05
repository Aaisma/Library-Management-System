document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');
    let books = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        const bookType = document.getElementById('book-type').value;

        if (title && author && year) {
            books.push({ title, author, year, type: bookType });
            displayBooks();
            form.reset();
        }
    });

    function displayBooks() {
        bookList.innerHTML = '';
        books.forEach((book, index) => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');

            bookItem.innerHTML = `
                <div class="book-info">
                    <h2>${book.title}</h2>
                    <p>by ${book.author} (${book.year}) - <span class="book-genre">${book.type}</span></p>
                </div>
                <button class="delete-btn" onclick="confirmDelete(${index})">Delete</button>
            `;

            bookList.appendChild(bookItem);
        });
    }

    window.confirmDelete = function(index) {
        if (confirm(`Are you sure you want to delete "${books[index].title}"?`)) {
            books.splice(index, 1);
            displayBooks();
        }
    }
});
