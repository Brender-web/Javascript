// A ->80 -100
// B ->60 -79
// C ->40 -59
// D ->20 -39
// E ->0 - 19

function gradeCal(score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade =""

    if (percent >= 80){
        letterGrade = "A"
    }else if(percent >= 60){
        letterGrade = "B"
    }else if(percent >= 40){
         letterGrade = "C"
    }else if(percent >= 20){
        letterGrade = "D"
    }else{
        letterGrade = "E"
    }

    return `You got grade ${letterGrade}  which is ${percent}%`;
}

let scoreNum1 = gradeCal(11,20);
console.log(scoreNum1);