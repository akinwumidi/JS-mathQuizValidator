    /*
            *  Defining Tabel
            *  Input (s): Number 1, Operetor, number 2, anwser
            * Process ing: check what the operator is , tand then perform the correct Math.
            *   on the two numbers and check if it matches the answer
            * Output(s): correct if correct , incorrect if incorrect.
        */
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