const num1 = parseFloat(prompt('Enter num1: '));
const num2 = parseFloat(prompt('Enter num2: '));

const operator = prompt('Enter operator (+, -, /, *)');

let result = 0;

if(isNaN(num1) || isNaN(num2)) {
    alert('Please enter a valid number!');
} else{
    if(operator == '+'){
        result = num1 + num2;
    }
    else if(operator == '-'){
        result = num1 - num2;
    } 
    else if(operator == '*'){ 
        result = num1 * num2;                        
    }
     else if(operator == '%'){     
        result = num1 % num2;
    }
    alert(result);
}