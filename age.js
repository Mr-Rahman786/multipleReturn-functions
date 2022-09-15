function familyItsAge(number) {
    const allAge = number % 30;

    if (allAge === 0) {
        return true;
    }
    else {
        return false;
    }
}
const allMemberAge = familyItsAge(120);
console.log('Please Check in here ', allMemberAge);

const kindOfMember = familyItsAge(98);
console.log('just waait a minute ', kindOfMember);
