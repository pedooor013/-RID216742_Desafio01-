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

    //Function para renderizar o array tasks
    const renderTasks = () => {
        taskList.innerHTML = "";
        tasks.forEach((task, index) =>{
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="tasks-content">
                <h3 class="${task.checked ? "h3-tasks-checked" : "h3-tasks"}">${task.name}</h3>     
                <div class="tasks-span">
                        <span class="tasks-tag">${task.tag}</span>
                        <span class="tasks-data-tag">Criado em: ${task.date}</span>
                    </div>
                </div>
                <button class= "${task.checked ? "btn-checked-tasks" :"btn-finish-tasks" }" onclick="finishTasks(${index})">
                    ${task.checked ? "✓" : "Concluir"}
                </button>
            `;
            taskList.appendChild(li);
        });
        countFinishTasks();
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
            tasks.push({
                name: taskName,
                tag: taskTag,
                date: taskDateCreate,
                checked: false
            });
            saveTasks();
            renderTasks();
            nameTask.value = "";
            tagTask.value = "";
        }
    }

    const finishTasks = (index) =>{
        tasks[index].checked = !tasks[index].checked;
        saveTasks();
        renderTasks();
        console.log(tasks[index].checked);
    } 

    const countFinishTasks = () =>{
        const numFinishedTasks = tasks.filter(t => t.checked).length;
        footer.innerHTML = `<span>${numFinishedTasks} tarefas concluídas</span>`;
    }

    window.onload = () =>{
        renderTasks();
    }