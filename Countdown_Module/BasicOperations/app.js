const operations = require("./operations");

// Ersetze 50 durch deine Katalognummer
function printCalculation(operator, calculate){
    console.log("3 " + operator + " 7 = " + calculate(3, 7));
}

printCalculation("+", operations.sum);
printCalculation("-", operations.diffrence);
printCalculation("*", operations.product);
printCalculation("/", operations.quotient);