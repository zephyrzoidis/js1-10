//write first method
function sleep_in(weekday,vacation) {
    var sleep = !weekday || vacation;
    return sleep;
}

//write second method
function monkey_trouble(a_smile, b_smile){
    var trouble = (a_smile && b_smile) || (!a_smile && !b_smile);
    return trouble;
}

function string_times(Hi, num){
    var subString = "";
    for(var i = 0; i < num; i++){
        subString += Hi;
    }
    return subString;
}

function front_times(param, num){
    var subString = "";
    var threeChars = param.slice (0,3);
        for (var i = 0; i < num; i++){
            subString += threeChars;

        }
    return subString;
}

function string_bits(str){
    var string = "";
    for (var i = 0; i < str.length; i = i + 2) {
        if(i % 2 == 0){
            string += str.substring(i, i + 1);
        }
    }
    return string;
}

function caughtSpeeding(speed, bday){
    if (speed <= 60){
        return 0;
    }

    if (speed >= 61 && speed <= 65 && bday == true ){
        return 0;
    }

    if (speed >= 61 && speed <= 80 && bday != true ){
        return 1;
    }
    if (speed >= 66 && speed <= 75 && bday == true ){
        return 1;
    }
    if (speed >= 81 && bday != true){
        return 2;
    }

    if (speed >= 81 && speed <= 85 && bday == true){
        return 1;
    }
}

function fizz_buzz(num){
    var string = "";
    var fizzBuzz = "Fizz";
    if (num % 5 == 0 &&  num % 3 == 0){
        fizzBuzz = "FizzBuzz";

    }else if (num % 3 == 0){
        fizzBuzz = "Fizz"

    }else if (num % 5 == 0){
        fizzBuzz = "Buzz";

    }else if (num % 3 != 0 && num % 5 != 0){
        fizzBuzz = num + "!";
    }
    return fizzBuzz;
}

//Finish this:
function teaParty(tea, candy){
    var num = "";
    if (tea >= 5 && candy >= 5){
        num = "1";
    }

    if (tea * 2 <= candy || candy * 2 <= tea) {
        num = "2";
    }

    if (tea < 5 || candy < 5) {
        num = "0";
    }
    return num;
}

function blackjack(param1, param2){
    var num ="";
    if (param1 <= 21 && param2 <= 21 && param1 > 0 && param2 > 0){
        if (param1 >= param2){
            num = param1;
        }
        if (param2 > param1){
            num = param2;
        }
    }
    if (param1 > 21 && param2 > 21) {
        num = "0";
    }
    if (param1 > 21 && param2 <= 21){
        num = param2;
    }
    if (param2 > 21 && param1 <= 21){
        num = param1;
    }
    return num;
}

function loneSum(a, b, c){
    var num ="";
    if(a != b && a != c && b != c){
        num = a + b + c;
    } else if (a == b && a != c && b != c){
        num = c;
    } else if (a != b && a == c && b != c){
        return b;
    } else if(a != b && a != c && b == c){
        num = a;
    }
    return num;
}


// 11-20:
function firstLast6(num1, num2, num3){
    var num = "";
    if(num1 == 6 || num3 == 6){
        num = true;
    }
    if (num1 != 6 || num3 != 6){
        boolean = false;
    }
    return boolean;
}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}

