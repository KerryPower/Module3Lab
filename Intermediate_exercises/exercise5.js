let twentyCents = 0.20;
let tenCents = 0.10;
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//console.log(fixedTwenty + fixedTen)

//5a
//Funtion doesnt work as it converts variable to a string then tries to perform the addition in string format which concatenates the arguments.

//5b
function currencyAddition(float1, float2) {
    let add = float1 + float2;
    return add.toFixed(2)
}
//console.log(currencyAddition(0.10, 0.20))

//5c
function currencyOperation1(float1, float2, operation) {
    switch (operation) {
        case '+':
            let addition = float1 + float2;
            return addition.toFixed(2);
        case '-':
            let subtract = float1 - float2;
            return subtract.toFixed(2);
            break;
        case '*':
            let multiply = float1 * float2;
            return multiply.toFixed(2);
            break;
        case '/':
            let divide = float1 / float2;
            return divide.toFixed(2);
            break;
    }
}


//5d
function currencyOperation2(float1, float2, operation, numDecimals) {
    if (numDecimals <= 10 && numDecimals >= 1) {
        switch (operation) {
            case '+':
                let addition = float1 + float2;
                return addition.toFixed(numDecimals);
            case '-':
                let subtract = float1 - float2;
                return subtract.toFixed(numDecimals);
                break;
            case '*':
                let multiply = float1 * float2;
                return multiply.toFixed(numDecimals);
                break;
            case '/':
                let divide = float1 / float2;
                return divide.toFixed(numDecimals);
                break;
        }
    } else {
        return "input is invalid";
    }
}

