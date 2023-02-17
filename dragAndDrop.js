// (function dragAndDrop() {
//     // координаты x and y

//     let coordX;
//     let coordY;

//     //  перетаскиваемый елемент
//     const taskDrop = document.querySelector('.task'); 
//     // зоны куда происходит дроп
//     const dropZoneTask = document.querySelector('.todo'); 
//     const dropZoneProgress = document.querySelector('.progress'); 
//     const dropZoneCompleted = document.querySelector('.completed'); 

//     // разрешение дропа
//     taskDrop.draggable = true;

//     // ================== перетаскивание ===================================

//     taskDrop.addEventListener ('dragstart', (e) => {
//             e.dataTransfer.setData('text/html', 'dragstart');
//             coordX = e.offsetX;
//             coordY = e.offsetY;
//     });

//     taskDrop.addEventListener ('dragend', (e) => {
//         taskDrop.style.position = 'absolute';
//         taskDrop.style.top = (e.pageY - coordY) + 'px';
//         taskDrop.style.left = (e.pageX  - coordX)  + 'px';
      
//     });

// // ===================== дроп ==============================================


// dropZoneProgress.addEventListener ('dragover', (e) => {
//     e.preventDefault();
//     console.log('dragover')
// });

// dropZoneProgress.addEventListener ('drop', (e) => {
//         taskDrop.style.position = 'absolute';
//         taskDrop.style.top = (e.pageY - coordY) + 'px';
//         taskDrop.style.left = (e.pageX  - coordX)  + 'px';
//         console.log('drop');
// });

// }) ();



    //  перетаскиваемый елемент
    const taskDrop = document.querySelectorAll('.task');
    console.log(taskDrop); 
    // зоны куда происходит дроп
    const dropZoneTask = document.querySelector('.todo'); 
    const dropZoneProgress = document.querySelector('.progress'); 
    const dropZoneCompleted = document.querySelector('.completed'); 

  taskDrop.forEach(elem => {
    elem.draggable = true;
  })

    dropZoneTask.ondragover = allowDrop;
    dropZoneProgress.ondragover = allowDrop;
    dropZoneCompleted.ondragover = allowDrop;

    function allowDrop (event) {
        event.preventDefault();
    }

  

    dropZoneTask.ondragstart = drag;
    dropZoneProgress.ondragstart = drag;
    dropZoneCompleted.ondragstart = drag;

    function drag (event) {
        event.dataTransfer.setData('class', event.target.class);
    }

   

    dropZoneTask.ondrop = drop;
    dropZoneProgress.ondrop = drop;
    dropZoneCompleted.ondrop = drop;

    function drop (event) {
        event.target.append(document.querySelector('.task'))
    }