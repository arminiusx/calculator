let screen = "";
let total = 0;
let num1 = 0;
let firstTime = true;
let lastClick = "skip";

add = (total, num1) => { return total + num1 };

subtract = (total, num1) => { return total - num1 };

multiply = (total, num1) => { return total * num1 };

divide = (total, num1) => { return total / num1 };

operate = (operator, total, num1) => {
    if (operator === "+") {
        return add(total, num1);
    } else if (operator === "-") {
        return subtract(total, num1);
    } else if (operator === "*") {
        return multiply(total, num1);
    } else if (operator === "/") {
        return divide(total, num1);
    }
}

makeInteractive = () => {
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (e) {
            let click = e.target.innerHTML;
            let num = Number.parseInt(click);
            if (isNaN(num)) {
                if (click == "+" || click == "-" || click == "/" || click == "*" || click == "=") {
                    if (screen != "") {
                        num1 = Number.parseFloat(screen);
                        screen = "";
                        upDateScreen(click);
                        if (firstTime) {
                            firstTime = false;
                            total = num1;
                            lastClick = click;
                        } else {
                            if (click != "=") {
                                total = operate(lastClick, total, num1); 
                            } else if (click == "=") {
                                
                                total = operate(lastClick, total, num1);
                            }
                            upDateScreen(Number.parseFloat(total));
                        
                            lastClick = click;

                        }
                        
                    } 
                } else if (click == "CLEAR") {
                    reset();
                    upDateScreen(total);
                } else if (click == ".") {
                    screen = screen + click;
                    upDateScreen(screen);
                }
            } else {
                screen = screen + click;
                upDateScreen(screen);
            }
        });
    }
}

upDateScreen = (output) => {
    let screen = document.getElementById("screen");
    screen.innerHTML = output;
}

reset = () => {
    screen = "";
    total = 0;
    num1 = 0;
    firstTime = true;
    lastClick = "";
}

makeInteractive();