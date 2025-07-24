var tasks = [
    {id: 1, name: "Teste", tag: "Testando", finished: false},
    {id: 2, name: "Teste 2", tag: "Testando", finished: false},
    {id: 3, name: "Teste 3", tag: "Testando", finished: false},
];

//Função inicializada quando a pagina é carregada
window.onload = function(){
    const form = document.getElementById('create-tasks-form');
    form.addEventListener('submit', createTask);
}

const createTask = (event) =>{
    event.preventDefault();
    const checkbox = getCheckboxInput

}