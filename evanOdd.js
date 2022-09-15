function evanNumber(number) {
    const reminder = number / 2;

    if (reminder === 222) {
        return true;
    }
    else {
        return false;
    }
}
const backNumber = evanNumber(222);
console.log(backNumber);
const turnNumber = evanNumber(123);
console.log(turnNumber);