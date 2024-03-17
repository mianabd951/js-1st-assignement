
// alert Name 

document.getElementById("alertString").onclick = function () {

    alert("Muhammad Abdullah")


let statement = "alert('Muhammad Abdullah')"
document.getElementById("Statement").innerHTML = statement;

// document.getElementById("output").innerHTML = "";

}

// Alert Number

document.getElementById("alertNumber").onclick = function () {

    alert("123")


let statement = "alert(123)"
document.getElementById("Statement").innerHTML = statement;

// document.getElementById("output").innerHTML = "";

}

//  Variable names 

document.getElementById("variableNames").onclick = function () {

let html = "<ul><li>A variable neme can't contain any spaces</li><li>A variable name can contain only letters, numbers, dollor signs, and underscores</li> <li>Though a variable can't be any of javascript's keywords, it can contain keywords. for example,  useralert  and  myvar  are legal</li><li> capital letters are fine, but be care full. variable names are case sensitive. A rose  is not a Rose . if you assign the string 'floribundas' to the variable  rose , and then ask javaScript for the value assigned to  Rose , you'|| come up empty      </li>     </ul>"

document.getElementById("output").innerHTML = html;

}

// Camelcase example 

document.getElementById("camelCaseExamples").onclick = function () {

let html = "<h3>Examples</h3><ul> <li>user </li> <li>userResponse </li> <li>userResponseTime </li> <li>userResponseTimelimits </li> </ul>      "
    document.getElementById("output").innerHTML = html;

}

// Sum 2 numbers 

document.getElementById("sum2Numbers").onclick = function () {

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
document.getElementById("output").innerHTML = "<p class='text-center'>" + sum + "</p>";
let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let sum =num1 + num2;"
document.getElementById("Statement").innerHTML = statement;


}

// substract 2 numbers 

document.getElementById("substract2Numbers").onclick = function () {

    let num1 = 10;
    let num2 = 5;
    let substract = num1 - num2;
    document.getElementById("output").innerHTML = "<p class='text-center'>" + substract + "</p>";
    let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let substract =num1 - num2;"
    document.getElementById("Statement").innerHTML = statement;
    
    
    }

    // multiply 2 nembers 

    document.getElementById("multiply2Numbers").onclick = function () {

        let num1 = 10;
        let num2 = 5;
        let multiply = num1 * num2;
        document.getElementById("output").innerHTML = "<p class='text-center'>" + multiply + "</p>";
        let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let multiply =num1 * num2;"
        document.getElementById("Statement").innerHTML = statement;
        
        
        }
    
    
//  divide 2 numbers 
    document.getElementById("divide2Numbers").onclick = function () {

        let num1 = 10;
        let num2 = 5;
        let divide = num1 / num2;
        document.getElementById("output").innerHTML = "<p class='text-center'>" + divide + "</p>";
        let statement = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>let divide =num1 / num2;"
        document.getElementById("Statement").innerHTML = statement;
        
        
        }


    //   calculate some numbers 

        document.getElementById("calculateSomeNumbers").onclick = function (){


// document.getElementById("Statement").innerHTML = "";
// document.getElementById("output").innerHTML = "";


var someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
document.getElementById("output").innerHTML = "<p class='text-center'>" + someCalculation + "</p>";

let Statement = "let someCalculation = 36 / 6 * 3 + 2 ** 4 - (3 + 5)"

document.getElementById("Statement").innerHTML = Statement;



        } 


        document.getElementById("clearStatementButton").onclick = function () {

            document.getElementById("Statement").innerHTML = "";

        }         

        document.getElementById("clearOutputButton").onclick = function () {

            document.getElementById("output").innerHTML = "";

        }  



    