//Variaveis
const taskList = document.getElementById("tasks-list");
const nameTask = document.getElementById("name-tasks");
const tagTask = document.getElementById("tag-tasks");
const footer = document.getElementById('page-footer');
const btnTasks = document.getElementById('btn-tasks'); 


//Array tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Function que salva no localStorage o array Tasks
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}





//Function que recolhe a data atual
const getDate = () =>{
    const currentDate = new Date();

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    return `${currentDay}/${currentMonth}/${currentYear}`;
}


//Function  de adicionar tarefa 
const addTask = (event) =>{
    const taskName = nameTask.value.trim();
    const taskTag = tagTask.value.trim();
    const taskDateCreate = getDate();
    if(taskName !== "" && taskTag !== ""){
        const li = document.createElement('li');
        li.innerHTML = `
                <div class="tasks-content">
                <h3 id="h3-name-tasks">${taskName}</h3>
                <div class="tasks-span">
                    <span class="tasks-tag">${taskTag}</span>
                    <span class="tasks-data-tag">Criado em: ${taskDateCreate}</span>
                </div>
                </div>
                <button class="btn-finish-tasks" id="btn-tasks" onclick="finishTasks()">Concluir</button>
        `;
        taskList.appendChild(li);
        taskName.value = "";
        taskTag.value = "";
    }
}

const changeStyleButton = () =>{
    if(){
        btnTasks.className = 'btn-checked-tasks';
    }
}


const finishTasks = (button) =>{

} 

const countFinishTasks = () =>{
    /* const numFinishedTasks = ; */
    const span = document.createElement('span')
    /* span.innerHTML = `${numFinishedTasks} tarefas concluídas`; */
    span.innerHTML = ` tarefas concluídas`;
    footer.appendChild(span);
}

window.onload = () =>{
    countFinishTasks();
}