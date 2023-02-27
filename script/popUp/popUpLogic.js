const addStackButton = document.querySelector('.addStack');
const nameStackInput = document.querySelector('.nameStack');
const namingStackBlock = document.querySelector('.namingStack');
let checkNumberStack = 1;

addStackButton.addEventListener('click', () => {
        
        if (checkNumberStack < 8) {
            let inputNameStack = document.createElement('input')
            inputNameStack.type = 'text';
            inputNameStack.classList.add('nameStack');
            inputNameStack.placeholder = 'Structure name';

            namingStackBlock.appendChild(inputNameStack);

            checkNumberStack++;
        }
});