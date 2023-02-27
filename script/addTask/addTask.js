const buttonAdd = document.querySelector('.buttonAdd');
const todo = document.querySelector('.todo');
console.log(todo)

buttonAdd.addEventListener('click', addCard)




function addCard () {
    let task = document.createElement('div');
    task.classList.add('task');
    
    
    
    let priority = document.createElement('div');
    priority.classList.add('priority');
    priority.innerHTML = 'ease'; 

    let message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, obcaecati beatae. Consequatur, expedita id explicabo earum natus non magnam illum, ipsa quibusdam modi, maiores dolor dolore corporis totam esse illo.";

    
    task.append(priority);
    task.append(message);
    todo.append(task);
    dragAndDrop();
}





