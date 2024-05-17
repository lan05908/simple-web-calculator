const value = document.querySelector('span');
function calc(){
    let v ="";
    let f = document.equation;
    let left = f.left.value;
    let right = f.right.value;
    let op = f.operator.value;
    if(isNaN(left) || isNaN(right)){
        value.textContent = "Please enter numbers";
    }else {
        left = parseFloat(left);
        right = parseFloat(right);
        switch (op) {
            case '+':
                v = left + right;
                break;
            case '-':
                v = left - right;
                break;
            case '*':
                v = left * right;
                break;
            case '/':
                v = left / right;
                break;
            case '^':
                v = Math.pow(left, right);
                break;
            case 'log_L':
                v = Math.log(left);
                break;
            case 'sin_L':
                v = Math.sin(left);
                break;
            default:
                v = "not a valid input";
        }
    }
    if(!isNaN(v)){
        value.textContent = v.toPrecision(4);
    }else {
        value.textContent = "The answer is not valid"
    }

}
