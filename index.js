document.addEventListener('DOMContentLoaded' , function() {
    const gridContainer = document.querySelector('#gridContainer')

    // Style grid container
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = "repeat(4, 1fr)"; // creates grid
    gridContainer.style.gap = "0px"; // no spacing between squares
    gridContainer.style.position = "absolute";
    gridContainer.style.top = "50%"; // puts squares in center of web page
    gridContainer.style.left = "50%";
    gridContainer.style.transform = "translate(-50%, -50%)";

    // Create buttons and add to grid
    for (let i = 0; i < 16; i++){
        const square = document.createElement('div')
        // square.innerHTML = `${i+1}`

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

    document.body.appendChild(gridContainer);

});