var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var qtd1 = document.getElementById("qtd1");
var qtd2 = document.getElementById("qtd2");
var calculateButton = document.getElementById("calculateButton")
var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var valueResult = document.getElementById("valueResult")

function verifyInput() {
    if (value1.value && value2.value && qtd1.value && qtd2.value) {
        calculateButton.classList.remove("disabled");
    } else {
        calculateButton.classList.add("disabled");
    }
}

function priceResult() {
    if (value1 && value2){
        var formatedResult = getDividedPrice1().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        var formatedResult2 = getDividedPrice2().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        result.innerHTML = formatedResult;
        result2.innerHTML = formatedResult2;
    }
}

function getDividedPrice1() {
    var responseValue = value1.value / qtd1.value;
    return responseValue
}

function getDividedPrice2() {
    var responseValue2 = value2.value / qtd2.value; 
    return responseValue2
}

function compareResult() {
    if(value1.value > value2.value) {
        var highestValue = parseFloat(value1.value);
        var formatedResult3 = highestValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        valueResult.innerHTML = formatedResult3;
    } else {
        var highestValue = parseFloat(value2.value);
        var formatedResult3 = highestValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        valueResult.innerHTML = formatedResult3;
    }
}