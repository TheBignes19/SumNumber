let numbers = [];
const input = document.querySelector("input")
const span = document.querySelector("span")


function add() {
    let numberEntered = parseFloat(input.value)
    if(!isNaN(numberEntered)){
        numbers.push(numberEntered)
        input.value=''
        update()
    }
}

function calculate(){
    let sum = 0

    for (let i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
   span.textContent = sum
}

function update(){
    let result = ""

    for (let i=0; i<numbers.length; i++){
        if(i > 0 ){
            result += "+"
    }
    result += numbers[i]
    }
    span.textContent = result
}

function clean(){
    numbers = []
    input.value = ''
    span.textContent = "0"
}