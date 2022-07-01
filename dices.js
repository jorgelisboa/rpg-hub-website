let contentBox = document.getElementById("content-box")
let sumResult = document.getElementById("sum")
let cal = document.getElementById("calculation")
let diceAmount = []
let diceArray = [
    2,
    4,
    6,
    8,
    10,
    12,
    20,
    100
]

//--------------


function sortResult(diceType){
    return Math.floor(Math.random()* diceType) + 1
}

function generateDices(diceArray){
    let dicesComponent = ""
    for (let index = 0; index < diceArray.length; index++) {

        dicesComponent +=
        `<div class="border d${diceArray[index]}" id="border-d${diceArray[index]}">
            <p class="counter d${diceArray[index]}" id="counter-d${diceArray[index]}"></p>
        </div>
        <button class="roll-button d${diceArray[index]}" onclick="showDicesResult(${diceArray[index]})">
            <img src="images/d.png" alt="d${diceArray[index]}">
        </button>`
    }
    return dicesComponent
}

function showDices(htmlComponent){
    var dicesBarComponent = document.getElementById("dices-bar")
    dicesBarComponent.innerHTML = htmlComponent
}

function rollDice(dice, diceQnt){
    var dicesSum = 0
    var value
    diceAmount = []
    for (let index = 0; index < diceQnt; index++) {
        value = sortResult(dice)
        diceAmount.push(value)
        dicesSum += value
    }
    console.log(dicesSum)
    return dicesSum

}


function showDicesResult(diceResult){
    var value = rollDice(diceResult,1)
    
    putResultOnScreen(value)
    showAllDices()
}
function showAllDices(){
    sumResult.innerHTML = ''
    sumResult.innerHTML += diceAmount.sort(function(a, b){return a - b})
}
function putResultOnScreen(diceResult){
    var contentBox = document.getElementById("content-box")
    contentBox.innerHTML = diceResult
}

showDices(generateDices(diceArray))


//---------------------------------
    function Acrescing(){
        if(diceAmount > 1){
            
        }    
    }

    function Rolling(){
        i=0
        if(sumD6 != 0){ //se tiver d6 faça
            while (i < sumD6){ //enquanto i menor que totalD6
                d6 = (Math.floor(Math.random()* 6) + 1)
                sum.push(d6)
                i++
            }
            console.log(i)
            calculation += i + 'd6 '
        }

        i=0
        if(sumD4 != 0){
            Acrescing()
            while (i < sumD4){
                
                d4 = (Math.floor(Math.random()* 4) + 1)
                sum.push(d4)
                i++
            }
            calculation += i + 'd4 '
        }
        i=0
        if(sumD2 != 0){
            Acrescing()
            while (i < sumD2){
                
                d2 = (Math.floor(Math.random()* 2) + 1)
                sum.push(d2)
                i++
            }
            calculation += i + 'd2 '
        }
    }

    function Clear(){
        sumD6 = 0
        sumD4 = 0
        sumD2 = 0
        sumResult.innerHTM = 'null'
        
        document.getElementById("border-d6").style.display="none"
        document.getElementById("counter-d6").style.display="none"
        document.getElementById("border-d4").style.display="none"
        document.getElementById("counter-d4").style.display="none"
        document.getElementById("border-d2").style.display="none"
        document.getElementById("counter-d2").style.display="none"
    }