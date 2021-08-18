# JS-mathQuizValidator
<p>
Simple JavaScript program to quiz a child on simple arithmetic. The program   allows a child to enter a number, an arithmetic operator (+, -, *, or /), another number, and the child's answer to the problem. The program computes the correct answer and compare it to the child's answer and output "Correct!! You are a genius" or "Almost there!. Try again!". And notifies the user on common omisions.
</p>

## Defining Table

<br>

```javascript
// Input (s): Number 1, Operetor, number 2, anwser
// Processing: check what the operator is , tand then perform the correct Math. on the two numbers and check if it matches the answer
// Output(s): correct if correct , incorrect if incorrect.

// Heres the JS code. be sure to reference index HTML for the class and Id declarations

function ValidateMaths() {
        let Number1 = parseFloat(document.getElementById("Number1").value);
        let operator = document.getElementById("Operator").value;
        let number2 = parseFloat(document.getElementById("number2").value);
        let Answer = parseFloat(document.getElementById("Answer").value);
        var output = " ", correctAns="";

    function computeresult(){
        if(Answer==correctAns){
            output="Correct!! You are a genius"
        }
        else{
            output="Almost there!. Try again!"
        }
    }

        if (operator == "+") {
            //  Do something 
            correctAns = Number1 + number2;
            computeresult()
        } else if (operator == "-") {
            // Do something else 
            correctAns = Number1 - number2;
            computeresult()
        } else if (operator == "*") {
            // Do something else
            correctAns = Number1 * number2;
            computeresult()
        } else if (operator == "/") {
            correctAns = Number1 / number2;
            computeresult()
        } else {
            output = "!!!!Error , Please enter a valide operator";
        }
        document.getElementById("Output").innerHTML = output;
    }
```


## Screenshots

<br>

![App Screenshot](preview.png)


  

  
## Extras

Feel free to email me anytime with your questions, link in profile page, if you need help understanding the code. 

You may copy or use the code as it pleases you.

Enjoy

&copy; Israel Damilola Akinwumi