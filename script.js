document.addEventListener("DOMContentLoaded", function (){

    const addButton = document.getElementById("add-task-btn")
    const taskInput = document.getElementById("task-input")
    const taskList = document.getElementById("task-list")
    
    loadTasks()
    
    function loadTasks(){
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]")
        storedTasks.forEach(taskText => addTask(taskText, false))
    }

    function addTask(taskText = null, save = true){
        if (taskText === null)
            taskText = taskInput.value.trim()
        if (taskText === ""){
            alert("Enter your tasks")
            return
        }
        const li = document.createElement("li")
        li.textContent = taskText

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"
        removeButton.className = "remove-btn"
        removeButton.onclick = function(){
            taskList.removeChild(li)
        }

        li.appendChild(removeButton)
        taskList.appendChild(li)

        if (save){
            const storedTasks=JSON.parse(localStorage.getItem("tasks") || "[]")
            storedTasks.push(taskText)
            localStorage.setItem("tasks", JSON.stringify(storedTasks))
        }

        taskInput.value = ""

    }

    function removeTaskFromStorage(taskText){
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    storedTasks = storedTasks.filter(task => task !== task)
    localStorage.setItem('tasks', JSON.stringify(storedTasks))    
    }

   
    addButton.addEventListener("click", addTask)
taskInput.addEventListener("keypress", function(event){
    if (event.key === 'Enter'){
        addTask()
    }
})


})