function Book(title, author, description) {
    this.title = title;
    this.author = author;
    this.description = description;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.description}</td>
    <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
}
UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function() {
        document.querySelector('.alert').remove();
    },3000);
}
UI.prototype.clearFields = function() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#description').value = '';
}
document.querySelector('#book-form').addEventListener('submit', function(e) {
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          description = document.querySelector('#description').value;

    const book = new Book(title, author, description);
    const ui = new UI();
    if(title === '' || author === '' || description === '') {
        ui.showAlert('Please, fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book Added!', 'success');
        ui.clearFields();
    }
    e.preventDefault();
});
