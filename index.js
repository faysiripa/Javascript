let numberInput = document.getElementById("number-input");
let generateButton = document.getElementById("generate-button");
let output = document.getElementById("output");

function showTable() {
    number = Number(numberInput.value);
    output.innerHTML = "";

    if(number == 0) {
        output.innerHTML = "0 Times Table does not provide";
        return;
    }

    let result = "";
    for (let i = 1; i <= 12; i++) {
        result += String(number) + " x " + String(i) + " = " + String(number * i) + "<br>";
    } 
        
    output.innerHTML = result;
}

generateButton.addEventListener("click", showTable); 