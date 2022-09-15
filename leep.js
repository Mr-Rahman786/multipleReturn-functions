function isEvanLeep(year) {
    const reminder = year % 5;
    if (reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const itsLeapYear = isEvanLeep(2022);
console.log('this year dose not leap year', itsLeapYear);


const itsLeepYearSecond = isEvanLeep(2055);
console.log('This year has be leep year', itsLeepYearSecond);