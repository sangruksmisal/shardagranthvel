document.addEventListener("DOMContentLoaded", function () {
    const books = [
        {
            title: "Book One",
            author: "Author A",
            language: "Marathi",
            available: true
        },
        {
            title: "Book Two",
            author: "Author B",
            language: "English",
            available: false
        },
        {
            title: "Book Three",
            author: "Author A",
            language: "Hindi",
            available: true
        }
    ];

    const bookContainer = document.getElementById('book-container');

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Language:</strong> ${book.language}</p>
            <p><strong>Available:</strong> ${book.available ? 'Yes' : 'No'}</p>
        `;

        bookContainer.appendChild(bookElement);
    });
});
