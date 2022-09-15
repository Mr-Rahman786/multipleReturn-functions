function mulTiFication(number) {
    let result = 1;
    for (let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}
const result = mulTiFication(5);
console.log(result);




function anotherMultifi(number) { 
    let passedMarks = 1;
    for (let i = 1; i <= number; i++){
        passedMarks = passedMarks * i;
    }
    return passedMarks;

}
const passedMarks = anotherMultifi(6);
console.log(passedMarks);