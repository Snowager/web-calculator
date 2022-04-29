let num = '';
let operator = '';
let equation = ['','',''];
let answer = 0;
let key = 0;
let z = "aaaa"
let equationDisplay = ""

$(document).val(num);

$(document).on('click', '.one', {number:'1'}, stringAddNumber );

$(document).on('click', '.two', {number:'2'}, stringAddNumber );

$(document).on('click', '.three', {number:'3'}, stringAddNumber );

$(document).on('click', '.four', {number:'4'}, stringAddNumber );

$(document).on('click', '.five', {number:'5'}, stringAddNumber );

$(document).on('click', '.six', {number:'6'}, stringAddNumber );

$(document).on('click', '.seven', {number:'7'}, stringAddNumber );

$(document).on('click', '.eight', {number:'8'}, stringAddNumber );

$(document).on('click', '.nine', {number:'9'}, stringAddNumber );

$(document).on('click', '.zero', {number:'0'}, stringAddNumber );

$(document).on('click', '.decimal', {number:'.'}, stringAddNumber );

$(document).on('click', '.add', {operator:'add'}, calculateOperator );

$(document).on('click', '.minus', {operator:'minus'}, calculateOperator );

$(document).on('click', '.multiply', {operator:'multiply'}, calculateOperator );

$(document).on('click', '.divide', {operator:'divide'}, calculateOperator );

$(document).on('click', '.clear', clearFunction );

$(document).on('click', '.negPos', signChangeFunction );



$(document).on('click', '.equal', function() {
    num = '';
    //console.log(equation[0])
    //console.log(equation[1])
    //console.log(equation[2])
    let answer = operationSelector(parseFloat(equation[0]), equation[1], parseFloat(equation[2]))
    clearFunction()
    equation[0] = answer
    displayNumbers(answer)
});

// function that adds clicked number to num string
function stringAddNumber(e) {
    number=e.data.number
    num=num+number
    
    if (equation[1] != "") {
        //console.log("balls")
        equation[2] = num
    } else {
        equation[0] = num
    } 
    //console.log(num)
    //console.log(equation)
    displayNumbers(num)  
}

function stringAddKey(keyCode) {
    number=keyCode
    num=num+number
    
    if (equation[1] != "") {
        //console.log("balls")
        equation[2] = num
    } else {
        equation[0] = num
    } 
    //console.log(num)
    //console.log(equation)
    displayNumbers(num)  
}

function calculateOperator(e) {
    if (!equation[2] == "") {
        //console.log("working")
        equation[0] = operationSelector(parseFloat(equation[0]), equation[1], parseFloat(equation[2]))
        equation[2] = ""
        displayNumbers(equation[0])
    } 
    operator=e.data.operator;
    equation[1] = operator;
    if (operator === 'add') {
        equationDisplay = equation[0]+"+"
    $(".equationHere").html(equationDisplay)
    } else if (operator === 'minus') {
        equationDisplay = equation[0]+"-"
    } else if (operator === 'multiply') {
        equationDisplay = equation[0]+"*"
    } else if (operator === 'divide') {
        equationDisplay = equation[0]+"/"
    } else {  
    }
    $(".equationHere").html(equationDisplay)
    //console.log(equation[0]+"+"+[equation[1]]);
    num = ""
}

function operationSelector(a, choice, b) {
    if (choice === 'add') {
        return addFunction(a,b);
    } else if (choice === 'minus') {
        return minusFunction(a,b);
    } else if (choice === 'multiply') {
        return multiplyFunction(a,b);
    } else if (choice === 'divide') {
        return divideFunction(a,b);
    } else {
        return "error";
    }
}

function addFunction(a,b) {
    //$(".stuffHere").html(a + b);
    equationDisplay = a+"+"+b+"="
    $(".equationHere").html(equationDisplay)
    return a + b    
}

function minusFunction(a,b) {
    //$(".stuffHere").html(a - b);
    equationDisplay = a+"-"+b+"="
    $(".equationHere").html(equationDisplay)
    return a - b
}

function multiplyFunction(a,b) {
    //$(".stuffHere").html(a * b);
    equationDisplay = a+"*"+b+"="
    $(".equationHere").html(equationDisplay)
    return a * b
}

function divideFunction(a,b) {
    //$(".stuffHere").html(a / b);
    equationDisplay = a+"/"+b+"="
    $(".equationHere").html(equationDisplay)
    if (b === 0) {
        return "Can't divide by zero"
    }
    return (a / b).toFixed(2)
}

function displayNumbers(num_) {
    $(".stuffHere").html(num_)
    console.log(equationDisplay)
    $(".equationHere").html(equationDisplay)
}

function clearFunction() {
    equation[0] = ""
    equation[1] = ""
    equation[2] = ""
    a = ""
    b = ""
    num = ""
    displayNumbers(num)
}

function signChangeFunction() {
    num *= -1
    $(".equationHere").html(equationDisplay)
    displayNumbers(num)
}

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode >= parseInt('47') && keycode <= parseInt('57')){
      stringAddKey((parseInt(keycode))-48)
    }
  });

