import { volConversions} from ("./volConversions");
import { tempConversions} from ("./tempConversions");


// Step 1: Input valu
const inputNum = parseFloat("Input Numerical Value");
const inputUnit = "Input Unit of Measurement";
const targetUnit = "Target Unit of Measurement";
const studentNum = parseFloat("Student Response");

// Step 2: Define conversion lists and structures
const tempList = ["Kelvin", "Celsius", "Fahrenheit", "Rankine"];
const volumeList = ["liters", "tablespoons", "cubic-inches", "cups", "cubic-feet", "gallons"];


// Step 3: Check conditions and output result
let output = "";
if (isNaN(inputNum) || isNaN(studentNum) || inputNum === "" || inputUnit === "" || targetUnit === "" || studentNum === "") {
    output = "Invalid";
} else if (!(tempList.includes(inputUnit) && tempList.includes(targetUnit)) || !(volumeList.includes(inputUnit) && volumeList.includes(targetUnit))) {
    output = "Invalid";
} else {
    let authoritativeAnswer;
    if (tempList.includes(inputUnit) && tempList.includes(targetUnit)) {
        authoritativeAnswer = tempConversions[inputUnit][targetUnit](inputNum);
    } else if (volumeList.includes(inputUnit) && volumeList.includes(targetUnit)) {
        authoritativeAnswer = volConversions[inputUnit][targetUnit](inputNum);
    }
    if (authoritativeAnswer === undefined) {
        output = "Invalid";
    } else {
        authoritativeAnswer = Math.round(authoritativeAnswer * 10) / 10;
        const studentAnswer = Math.round(studentNum * 10) / 10;
        if (authoritativeAnswer === studentAnswer) {
            output = "Correct";
        } else {
            output = "Incorrect";
        }
    }
}

console.log(output);
