document.addEventListener('DOMContentLoaded' , function() {
    const gridContainer = document.querySelector('#gridContainer')

    function promptForDimensions() {
        const size = prompt("Enter the number of rows and columns you want:", "4");
    
        if (size) {
            updateGrid(size);
        }
    }

    function updateGrid(dim){
        // Style grid container
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = `repeat(${dim}, 1fr)`; // creates grid
        gridContainer.style.gap = "0px"; // no spacing between squares
        gridContainer.style.position = "absolute";
        gridContainer.style.top = "50%"; // puts squares in center of web page
        gridContainer.style.left = "50%";
        gridContainer.style.transform = "translate(-50%, -50%)";

        gridContainer.innerHTML = ''; // clear existing cells

        // Create buttons and add to grid
        for (let i = 0; i < dim ** 2; i++){
            const square = document.createElement('div')

            // Style each square
            square.style.width = "60px"
            square.style.height = "60px"
            square.style.lineheight = "60px"
            square.style.border = "1px solid black";
            square.style.cursor = "pointer";
            square.style.textAlign = "center";

            square.addEventListener("click", function() {
                this.style.backgroundColor = "#000000";
            })
            
            gridContainer.appendChild(square)
        }
    }

    const changeDimensionButton = document.createElement("button");
    changeDimensionButton.textContent = "Change Grid Dimensions";
    changeDimensionButton.style.position = "absolute";
    changeDimensionButton.style.left = "50%";
    changeDimensionButton.style.transform = "translate(-50%, -50%)";
    changeDimensionButton.addEventListener("click", promptForDimensions);

    document.body.insertBefore(changeDimensionButton, document.getElementById("gridContainer"));

    updateGrid(4, 4);

    document.body.appendChild(gridContainer);

});