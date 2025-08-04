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
    newNode.textContent = taskName;
    
    myList.appendChild(newNode);

    newNode.addEventListener('click', function() {
        this.classList.toggle('checked')
    });

    const deleteButton = document.createElement('div');
    deleteButton.textContent = "×";
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
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

const quote = document.getElementById('quote-container');

fetch('https://api.allorigins.win/raw?url=https://zenquotes.io/api/today')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        quote.textContent = data[0].q;
    });


 

