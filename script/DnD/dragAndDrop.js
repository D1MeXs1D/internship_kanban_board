function dragAndDrop() {
    //  перетаскиваемый елемент
    const taskDrop = document.querySelectorAll('.task'); 
    // зоны куда происходит дроп
    const dropZoneTask = document.querySelector('.todo'); 
    const dropZoneProgress = document.querySelector('.progress'); 
    const dropZoneCompleted = document.querySelector('.completed'); 

    
    taskDrop.forEach (elem => {
        elem.draggable = true;  // разрешение DnD
      
        elem.addEventListener('mousedown', () => {
            elem.style.cursor = 'grabbing';
           
        });

        elem.addEventListener('mouseup', () => {
            elem.style.cursor = 'grab';
        });

        elem.addEventListener ('drag', () => {
            elem.style.cursor = 'grabbing';
            elem.style.opacity = '0';  
        });

        elem.addEventListener ('dragstart', (e) => {
            e.dataTransfer.setData('text/html', 'dragstart');
    
           
        });

        elem.addEventListener ('dragend', (e) => {
         
            addTask(flag);
            elem.style.cursor = 'grab';
            elem.style.opacity = '1';  
        });

        // функия для определения "окошка" в которое будет падать таска
        function addTask (flag) {
            switch (flag) {
                case 'dropZoneProgress':
                    dropZoneProgress.append(elem);
                    break;

                case 'dropZoneTask':
                    dropZoneTask.append(elem);
                    break;

                case 'dropZoneCompleted':
                    dropZoneCompleted.append(elem);
                    break;
            
                default:
                    break;
            }
        }

        let flag = 'string'; // глобальная переменная для "переключателя", 
        // который будет помогать выбирать "окошко" в которое падает таска

        dropZoneProgress.addEventListener ('dragover', (e) => {
            e.preventDefault();
            flag = 'dropZoneProgress';
            return flag;
        });

        dropZoneTask.addEventListener ('dragover', (e) => {
            e.preventDefault();   
            flag = 'dropZoneTask';
            return flag;
        });

        dropZoneCompleted.addEventListener ('dragover', (e) => {
            e.preventDefault();   
            flag = 'dropZoneCompleted';
            return flag;
        });  
    });
};


dragAndDrop();