const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault();});  // stops page reloading on submit


const submit = document.getElementById('submit-btn');

const myList = document.getElementById('list');

const userInput = document.getElementById('user-input');

submit.addEventListener('click', function addItem() {

    const taskName = userInput.value.trim();
    if (taskName === "") return;

    const newNode = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskName;
    newNode.appendChild(taskSpan);
    myList.appendChild(newNode);

    newNode.addEventListener('click', function() {
        this.classList.toggle('checked')
    });

    const editButton = document.createElement('div');
    editButton.textContent = "edit";
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function(event) {
    event.stopPropagation();
    const userEdit = prompt("Edit task:", taskSpan.textContent);
    if (userEdit !== null && userEdit.trim() !== "") {
        taskSpan.textContent = userEdit.trim();
    }
    });
    newNode.appendChild(editButton);

    const deleteButton = document.createElement('div');
    deleteButton.textContent = "×";
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function(event) {
    event.stopPropagation();
    newNode.remove();
    });
    newNode.appendChild(deleteButton);
    
    userInput.value = "";
});


const clear = document.getElementById('clear-btn');
clear.addEventListener('click', function() {
    if (confirm("Are you sure you want to clear all tasks?")) {
        myList.innerHTML = "";
    }
});


// create a backend proxy to fix CORS issue

const quote = document.getElementById('quote');
const author = document.getElementById('author');

fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/today')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quote.textContent = data[0].q;
        author.textContent = "- " + data[0].a;
    });

