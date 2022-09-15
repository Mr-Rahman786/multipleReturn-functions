// function getNumbers(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

function getOddNumber(numbers) {
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
        }
    }
}
const finedNumber = [12, 20, 76, 51, 56, 60, 45, 76];
getOddNumber(finedNumber);
// getNumbers(finedNumber);
console.log(getOddNumber);




