
//ASSIGNMENT ONE - funktionOne kald functionTwo - functionTwo læg 1og 2 sammen vis resultatet i konsollen. 

//function number one


// function functionOne() {
//     functionTwo();
// }


//function number two 

// function functionTwo() {

//     console.log(1 + 2);
// }

// functionTwo();




//ASSIGNMENT TWO - funktionOne kald functionTwo med: numberOne og NumberTwo. functionTwo kræver 2 args. læg arg 1og arg 2 sammen
//vis resultatet i konsollen. 


// function der kalder functionOne

// function functionOne();

// function number one


// function functionOne() {
//     functionTwo(10,30);

// }

//function number two 
// function functionTwo(numberOne, numberTwo) {

//     console.log(numberOne + numberTwo);

// }

//ASSIGNMENT THREE - lalalalalala

// functionOne();

// function functionOne() {
//     functionTwo(10,30);

// }
//function number two 
// function functionTwo(numberOne,numberTwo) {

//     let myResult = numberOne + numberTwo;
//     functionThree(myResult);

// }
//function number three

// function functionThree(myData){

//     console.log(myData);

// }

//ASSIGNMENT FOUR 

//Kalder eller Trigger 
functionOne();

function functionOne() {
    functionTwo(10,10);

}
//function number two 
function functionTwo(numberOne,numberTwo) {

    let myResult = addMe(numberOne, numberTwo);
    functionThree(myResult);

}

//addMe function

function addMe(valueOne,ValureTwo) {
    let myResult = valueOne + ValureTwo;

    return myResult;
}


//function number three

function functionThree(myData){

    console.log(myData);

}



