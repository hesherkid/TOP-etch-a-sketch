let container = document.querySelector("#container");

let squaresPerSide = 16;

for (let i = 0; i < squaresPerSide; i++){
    const squareColumn = document.createElement("div");
    squareColumn.classList.add("square-column");
    squareColumn.style.backgroundColor = randomColor();
    container.appendChild(squareColumn);
     
    for (let j = 0; j < squaresPerSide; j++){
        const squareChild = document.createElement("div");
        squareChild.classList.add("square-child");
        squareChild.style.backgroundColor = randomColor();
        squareColumn.appendChild(squareChild);        
        squareChild.addEventListener("mouseover", function(){
            squareChild.style.background = '#499ea1';
        })    
}}

let errorMessage = "please choose between 1-100."

const newGridBtn = document.createElement("button");
newGridBtn.classList.add("new-grid");
newGridBtn.textContent = "create new sketch";
document.body.insertBefore(newGridBtn, container);

newGridBtn.addEventListener("click", function(){
    let newSquaresPerSide = prompt("how many squares per side? (please choose between 1-100)");
    if (isNaN(newSquaresPerSide) || newSquaresPerSide < 1 || newSquaresPerSide > 100){
        alert(errorMessage);
    }    
    else {

    container.remove();

    let newContainer = document.createElement("div");
    newContainer.classList.add("new-container");
    document.body.appendChild(newContainer);

    for (let i = 0; i < newSquaresPerSide; i++){
        const squareColumn = document.createElement("div");
        squareColumn.classList.add("square-column");
        squareColumn.style.backgroundColor = randomColor();
        newContainer.appendChild(squareColumn);
        
        for (let j = 0; j < newSquaresPerSide; j++){
            const squareChild = document.createElement("div");
            squareChild.classList.add("square-child");
            squareChild.style.backgroundColor = randomColor();
            squareColumn.appendChild(squareChild);

            squareChild.addEventListener("mouseover", function(){
                squareChild.style.background = '#499ea1';
            })
        
    }}

    container = newContainer;
    squaresPerSide = newSquaresPerSide;
}
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.random().toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}



    