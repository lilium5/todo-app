const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault();}); // stops page reloading on button press


const submit = document.getElementById('submit-btn');

const myList = document.getElementById('list');

const userInput = document.getElementById('user-input');

submit.addEventListener('click', function addItem() {
    const taskName = userInput.value.trim();
    if (taskName === "") return;

    const newNode = document.createElement('li');
    newNode.textContent = taskName;
    
    myList.appendChild(newNode);

    const newX = document.createElement('div');
    newX.textContent = "X";
    newX.classList.add('delete-btn');

    newX.addEventListener('click', function() {
    newNode.remove();
});

    newNode.appendChild(newX);
    
    userInput.value = "";
});
