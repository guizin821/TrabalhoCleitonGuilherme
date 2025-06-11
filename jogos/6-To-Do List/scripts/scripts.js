const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span>
            <button class="concluirButton" onclick="concluirTask(this)">Concluido</button>
            <button class="deleteButton" onclick="deleteTask(this)">Remover</button>` 
            taskList.appendChild(li);
            taskInput.value = ""}
}

function concluirTask(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    span.classList.toggle("done");
  }

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
