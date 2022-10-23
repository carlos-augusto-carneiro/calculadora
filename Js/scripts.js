const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }

    //adicionar alguma coisa na tela
    addDigit(digit) {
        if( digit === "," && this.currentOperationText.innerText.includes(",")){
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    //Processar todas as operações
    previousOperation(operation){

        let operationValue;
        let previous = +this.previousOperationText.innerText;
        let current = +this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous)
                break;
            default:
                return;
        }
    }


    //trocar o valor na tela da calculadora
    updateScreen(operationValue = null, operation = null, previous = null, previous = null) {
        this.currentOperationText.innerText += this.currentOperation;
    }
};

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >= 0 || value === ","){
            calc.addDigit(value)
        } else {
            
        }
    });
});