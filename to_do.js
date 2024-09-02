const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearAllButton = document.getElementById('clearAllButton');

addButton.addEventListener('click',function(){
    const taskText = taskInput.value.trim();
    if(taskText!==''){
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const comButton = document.createElement('button');
        comButton.textContent = 'Complete';
        comButton.addEventListener('click',function(){
            taskSpan.classList.toggle('completed');
        });

        const delButton = document.createElement('button');
        delButton.textContent='Delete';
        delButton.addEventListener('click',function(){
            taskList.removeChild(listItem);
        })
        taskList.appendChild(listItem);
        listItem.appendChild(comButton);
        listItem.appendChild(delButton);
        

        taskInput.value = '';
    }
    clearAllButton.addEventListener('click', function() {
        taskList.innerHTML = '';
    });
})

