let isDrawing = false;

function createGrid(size) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const squareSize = 960 / size;

    container.addEventListener('mousedown', () => {
      isDrawing = true;
    });

    container.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseenter', () => {
          if (isDrawing) {
            square.style.backgroundColor = 'black';
          }
        });    
        

        container.appendChild(square);
    }
}


 document.getElementById('resizeBtn').addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter new grid size (1 to 100):'));
  
    if (newSize && newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });


  createGrid(16);