window.onload=function(){
    //Elements
    const btnDraw = document.getElementById("draw");
    const inputSquares = document.getElementById("amount");
    const divSquares = document.getElementById("squares");

    //Draw button click function
    document.getElementById("draw").addEventListener('click', ()=>{
        divSquares.innerHTML = ''; //Delete existing squares if any
        //Create squares
        let n = 5; //Initial margin
        for(let i = 1; i <= inputSquares.value; i++) { //Loop depending on inputSquares.value
            //Create and style the squares
            let newSquare = document.createElement("div");
            newSquare.innerText = i;
            newSquare.style.marginLeft = n + "px"; //
            newSquare.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16); //Random color
            n*=2;
            divSquares.appendChild(newSquare);
        }
    });
}