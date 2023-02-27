const addTaskButton = document.querySelectorAll('.addTask');
const popUp = document.querySelector('.popUp');
const popUpItem = document.querySelector('.windowForAddTask');
const closePopUp = document.querySelector('.closeWindow');
const body = document.querySelector('body');


let flag = false; // флаг для переключения

addTaskButton.forEach(elem => {
    elem.addEventListener('click', () => {
        body.style.overflow = 'hidden'
        popUp.style.scale = '1';
        setTimeout(() => {
            popUp.style.opacity = '1';
            popUpItem.style.scale = '1';
        }, 100);
    })
});


closePopUp.addEventListener('click', () => {
    popUpItem.style.scale = '0';
        setTimeout(() => {
            body.style.overflowY = 'scroll'
            popUp.style.scale = '0';
        }, 200);
});
