document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    // Add task when button is clicked
    addTaskBtn.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add event listener to the delete button
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        // Add event listener to toggle completed status
        li.querySelector('span').addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        // Add the new task to the list
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }
});