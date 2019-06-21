var answer = prompt("What is your name?");

document.getElementById("greeting").innerHTML = "Hello, " + answer;

if (answer === answer) {
    document.getElementById("btn").style.display = "block";
    document.getElementById("scores").style.display = "grid";
    document.getElementById("submit").style.display = "block";
}

if (answer === null || answer === "") {
    document.getElementById("greeting").innerHTML = "Poshol lesom. I said Enter your name. Reload the page";
    document.getElementById("greeting").style.padding = "0 80px";
    document.getElementById("btn").style.display = "none";
    document.getElementById("scores").style.display = "none";
    document.getElementById("reload").style.display = "block";
    document.getElementById("submit").style.display = "none";
}

function myFunction() {
    answer = prompt("Enter your name");
    document.getElementById("greeting").innerHTML = "Hello, " + answer;
    if (answer === answer) {
        document.getElementById("btn").style.display = "block";
        document.getElementById("scores").style.display = "grid";
        document.getElementById("submit").style.display = "block";
    }
    if (answer === null || answer === "") {
        document.getElementById("greeting").innerHTML = "Poshol lesom. I said Enter your name. Reload the page";
        document.getElementById("greeting").style.padding = "0 80px";
        document.getElementById("btn").style.display = "none";
        document.getElementById("scores").style.display = "none";
        document.getElementById("reload").style.display = "block";
        document.getElementById("submit").style.display = "none";
    }
}

function evaluation() {
    if (document.getElementById("reading").value == "choose" || document.getElementById("listening").value == "choose" || document.getElementById("speaking").value == "choose" || document.getElementById("writing").value == "choose") {
        alert("Make sure you have chosen your score");
    } else {
        document.getElementById("fixed").style.position = "fixed";
        document.getElementById("feedback").style.display = "grid";
        document.getElementById("listening9").style.display = "none";
        document.getElementById("listening85").style.display = "none";
        document.getElementById("listening80").style.display = "none";
        document.getElementById("listening75").style.display = "none";
        document.getElementById("listening70").style.display = "none";
        document.getElementById("listening65").style.display = "none";
        document.getElementById("listening60").style.display = "none";
        document.getElementById("listening55").style.display = "none";
        document.getElementById("listening50").style.display = "none";
        document.getElementById("listening45").style.display = "none";
        document.getElementById("listening40").style.display = "none";
        document.getElementById("reading90").style.display = "none";
        document.getElementById("reading85").style.display = "none";
        document.getElementById("reading80").style.display = "none";
        document.getElementById("reading75").style.display = "none";
        document.getElementById("reading70").style.display = "none";
        document.getElementById("reading65").style.display = "none";
        document.getElementById("reading60").style.display = "none";
        document.getElementById("reading55").style.display = "none";
        document.getElementById("reading50").style.display = "none";
        document.getElementById("reading45").style.display = "none";
        document.getElementById("reading40").style.display = "none";
        document.getElementById("speaking90").style.display = "none";
        document.getElementById("speaking85").style.display = "none";
        document.getElementById("speaking80").style.display = "none";
        document.getElementById("speaking75").style.display = "none";
        document.getElementById("speaking70").style.display = "none";
        document.getElementById("speaking65").style.display = "none";
        document.getElementById("speaking60").style.display = "none";
        document.getElementById("speaking55").style.display = "none";
        document.getElementById("speaking50").style.display = "none";
        document.getElementById("speaking45").style.display = "none";
        document.getElementById("speaking40").style.display = "none";
        document.getElementById("writing90").style.display = "none";
        document.getElementById("writing85").style.display = "none";
        document.getElementById("writing80").style.display = "none";
        document.getElementById("writing75").style.display = "none";
        document.getElementById("writing70").style.display = "none";
        document.getElementById("writing65").style.display = "none";
        document.getElementById("writing60").style.display = "none";
        document.getElementById("writing55").style.display = "none";
        document.getElementById("writing50").style.display = "none";
        document.getElementById("writing45").style.display = "none";
        document.getElementById("writing40").style.display = "none";
        document.getElementById("overall90").style.display = "none";
        document.getElementById("overall85").style.display = "none";
        document.getElementById("overall80").style.display = "none";
        document.getElementById("overall75").style.display = "none";
        document.getElementById("overall70").style.display = "none";
        document.getElementById("overall65").style.display = "none";
        document.getElementById("overall60").style.display = "none";
        document.getElementById("overall55").style.display = "none";
        document.getElementById("overall50").style.display = "none";
        document.getElementById("overall45").style.display = "none";
        document.getElementById("overall40").style.display = "none";
        var score1;
        var score2;
        var score3;
        var score4;
        for (i = 0; i < 4; i++) {
            if (document.getElementById("reading").value == "nine") {
                score1 = 9;
                document.getElementById("reading90").style.display = "block";
            } else if (document.getElementById("reading").value == "eighthalf") {
                score1 = 8.5;
                document.getElementById("reading85").style.display = "block";
            } else if (document.getElementById("reading").value == "eight") {
                score1 = 8;
                document.getElementById("reading80").style.display = "block";
            } else if (document.getElementById("reading").value == "sevenhalf") {
                score1 = 7.5;
                document.getElementById("reading75").style.display = "block";
            } else if (document.getElementById("reading").value == "seven") {
                score1 = 7;
                document.getElementById("reading70").style.display = "block";
            } else if (document.getElementById("reading").value == "sixhalf") {
                score1 = 6.5;
                document.getElementById("reading65").style.display = "block";
            } else if (document.getElementById("reading").value == "six") {
                score1 = 6;
                document.getElementById("reading60").style.display = "block";
            } else if (document.getElementById("reading").value == "fivehalf") {
                score1 = 5.5;
                document.getElementById("reading55").style.display = "block";
            } else if (document.getElementById("reading").value == "five") {
                score1 = 5;
                document.getElementById("reading50").style.display = "block";
            } else if (document.getElementById("reading").value == "fourhalf") {
                score1 = 4.5;
                document.getElementById("reading45").style.display = "block";
            } else {
                score1 = 4;
                document.getElementById("reading40").style.display = "block";
            }
            if (document.getElementById("listening").value == "nine") {
                score2 = 9;
                document.getElementById("listening9").style.display = "block";
            } else if (document.getElementById("listening").value == "eighthalf") {
                score2 = 8.5;
                document.getElementById("listening85").style.display = "block";
            } else if (document.getElementById("listening").value == "eight") {
                score2 = 8;
                document.getElementById("listening80").style.display = "block";
            } else if (document.getElementById("listening").value == "sevenhalf") {
                score2 = 7.5;
                document.getElementById("listening75").style.display = "block";
            } else if (document.getElementById("listening").value == "seven") {
                score2 = 7;
                document.getElementById("listening70").style.display = "block";
            } else if (document.getElementById("listening").value == "sixhalf") {
                score2 = 6.5;
                document.getElementById("listening65").style.display = "block";
            } else if (document.getElementById("listening").value == "six") {
                score2 = 6;
                document.getElementById("listening60").style.display = "block";
            } else if (document.getElementById("listening").value == "fivehalf") {
                score2 = 5.5;
                document.getElementById("listening55").style.display = "block";
            } else if (document.getElementById("listening").value == "five") {
                score2 = 5;
                document.getElementById("listening50").style.display = "block";
            } else if (document.getElementById("listening").value == "fourhalf") {
                score2 = 4.5;
                document.getElementById("listening45").style.display = "block";
            } else {
                score2 = 4;
                document.getElementById("listening40").style.display = "block";
            }
            if (document.getElementById("speaking").value == "nine") {
                score3 = 9;
                document.getElementById("speaking90").style.display = "block";
            } else if (document.getElementById("speaking").value == "eighthalf") {
                score3 = 8.5;
                document.getElementById("speaking85").style.display = "block";
            } else if (document.getElementById("speaking").value == "eight") {
                score3 = 8;
                document.getElementById("speaking80").style.display = "block";
            } else if (document.getElementById("speaking").value == "sevenhalf") {
                score3 = 7.5;
                document.getElementById("speaking75").style.display = "block";
            } else if (document.getElementById("speaking").value == "seven") {
                score3 = 7;
                document.getElementById("speaking70").style.display = "block";
            } else if (document.getElementById("speaking").value == "sixhalf") {
                score3 = 6.5;
                document.getElementById("speaking65").style.display = "block";
            } else if (document.getElementById("speaking").value == "six") {
                score3 = 6;
                document.getElementById("speaking60").style.display = "block";
            } else if (document.getElementById("speaking").value == "fivehalf") {
                score3 = 5.5;
                document.getElementById("speaking55").style.display = "block";
            } else if (document.getElementById("speaking").value == "five") {
                score3 = 5;
                document.getElementById("speaking50").style.display = "block";
            } else if (document.getElementById("speaking").value == "fourhalf") {
                score3 = 4.5;
                document.getElementById("speaking45").style.display = "block";
            } else {
                score3 = 4;
                document.getElementById("speaking40").style.display = "block";
            }
            if (document.getElementById("writing").value == "nine") {
                score4 = 9;
                document.getElementById("writing90").style.display = "block";
            } else if (document.getElementById("writing").value == "eighthalf") {
                score4 = 8.5;
                document.getElementById("writing85").style.display = "block";
            } else if (document.getElementById("writing").value == "eight") {
                score4 = 8;
                document.getElementById("writing80").style.display = "block";
            } else if (document.getElementById("writing").value == "sevenhalf") {
                score4 = 7.5;
                document.getElementById("writing75").style.display = "block";
            } else if (document.getElementById("writing").value == "seven") {
                score4 = 7;
                document.getElementById("writing70").style.display = "block";
            } else if (document.getElementById("writing").value == "sixhalf") {
                score4 = 6.5;
                document.getElementById("writing65").style.display = "block";
            } else if (document.getElementById("writing").value == "six") {
                score4 = 6;
                document.getElementById("writing60").style.display = "block";
            } else if (document.getElementById("writing").value == "fivehalf") {
                score4 = 5.5;
                document.getElementById("writing55").style.display = "block";
            } else if (document.getElementById("writing").value == "five") {
                score4 = 5;
                document.getElementById("writing50").style.display = "block";
            } else if (document.getElementById("writing").value == "fourhalf") {
                score4 = 4.5;
                document.getElementById("writing45").style.display = "block";
            } else {
                score4 = 4;
                document.getElementById("writing40").style.display = "block";
            }
            var overall = (score1 + score2 + score3 + score4) / 4;
            var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
            for (k = 0; k < 10; k++) {
                if (overall + .125 === numbers[k] + .5) {
                    overall = overall + .125;
                    break;
                } else if (overall + .125 === numbers[k] + .25) {
                    overall = overall - .125;
                } else if (overall + .125 === numbers[k] + .75) {
                    overall = overall - .125;
                    break;
                } else if (overall - .125 === numbers[k] + .75) {
                    overall = overall + .125;
                    break;
                } else if (overall + .125 === numbers[k]) {
                    overall = overall + .125;
                } else if (overall === numbers[k] + .75) {
                    overall = overall + .25;
                    break;
                } else if (overall === numbers[k] + .25) {
                    overall = overall + .25;
                    break;
                } else if (overall === numbers[k] + .375) {
                    overall = overall + .5;
                    break;
                } else {}
            }
            if (answer !== null || answer === "") {
                document.getElementById("overallinfo").style.display = "block";
            }
            if (overall === 9) {
                document.getElementById("overall90").style.display = "block";
            } else if (overall === 8.5) {
                document.getElementById("overall85").style.display = "block";
            } else if (overall === 8) {
                document.getElementById("overall80").style.display = "block";
            } else if (overall === 7.5) {
                document.getElementById("overall75").style.display = "block";
            } else if (overall === 7) {
                document.getElementById("overall70").style.display = "block";
            } else if (overall === 6.5) {
                document.getElementById("overall65").style.display = "block";
            } else if (overall === 6) {
                document.getElementById("overall60").style.display = "block";
            } else if (overall === 5.5) {
                document.getElementById("overall55").style.display = "block";
            } else if (overall === 5) {
                document.getElementById("overall50").style.display = "block";
            } else if (overall === 4.5) {
                document.getElementById("overall45").style.display = "block";
            } else if (overall === 4) {
                document.getElementById("overall40").style.display = "block";
            } else {}
        }
        alert("Your overall band score is " + overall);
    }
}