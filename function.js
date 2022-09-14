function allExamMarks(mathExam, accounting, finance, english) {
    const total = mathExam + accounting + finance + english;
    // console.log('total result i have been got', total);
    const avarage = total / 4;
    return avarage;
}
const myMathExam = 89;
const myAccontingExam = 94;
const myFinanceExam = 82;
const myEnglilshExam = 85;

var myAvarage = allExamMarks(myMathExam, myAccontingExam, myFinanceExam, myEnglilshExam);
console.log('There show my Avarage exam marks', myAvarage);