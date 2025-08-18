const clickButtonAddTasks = (event) =>{
    
}

//Coleta as informações do input
const getInput = ({idTask, nameTask, tagTask, dateCreatedTaks}) =>{
    //Definindo as variaveis 
    const li = document.createElement('div');
    const tasksContent = document.createElement('div');
    const tasksTitle = document.createElement('h3');
    const spanWrapper = document.createElement('div');
    const spanTag = document.createElement('span');
    const spanDataTag = document.createElement('span');
    const button = document.createElement('button');

    //Implementando o nome das class 
    li.className('li-tasks');
    tasksContent.className('tasks-content');
    spanWrapper.className('tasks-span');
    spanTag.className('tasks-tag');
    spanDataTag.className('tasks-data-tag');
    button.className('btn-finish-tasks');

    //Definindo o conteudo das variaveis
    tasksTitle.textContent = nameTask;
    spanTag.textContent = tagTask;
    spanDataTag.tasksContent = `Criado em: ${dateCreatedTaks}`;
    button.textContent = 'Concluir';

    //Evento click botao
    button.addEventListener('click', () =>{
        li.classList.toggle("done");
    })
}

const addTasks = (event) => {
        event.preventDefault(); 
        document.getElementById("save-task");

} 
