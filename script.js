let colorBox = document.getElementById('color-box')
let btn = document.getElementById('change-color-btn')
let indexNum = 0;

let colorArr = [
    "red",
    "green",
    "blue",
    "yellow"
]

btn.onclick = function (){
        colorBox.style.backgroundColor =  colorArr[indexNum]
        indexNum = (indexNum + 1) % colorArr.length;
}

