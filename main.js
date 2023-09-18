let number = [];

function add() {
    let numberEntered = parseFloat(document.querySelector("input").value)
    if(!isNaN(numberEntered)){
        number.push(numberEntered)
        document.querySelector("input").value=''
        update()
    }
}

function calculate(){
    let sum = 0

    for (let i=0; i<number.length; i++){
        sum += number[i]
    }
    document.querySelector("span").textContent = sum
}

function update(){
    let result = ""

    for (let i=0; i<number.length; i++){
        if(i > 0 ){
            result += "+"
    }
    result += number[i]
    }
    document.querySelector("span").textContent = result
}

function clean(){
    number = []
    document.querySelector("input").value = ''
    document.querySelector("span").textContent = "0"
}