function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Examples:
// console.log(toCamelCase('first name'));      // firstName
// console.log(toCamelCase('user_id'));         // userId
// console.log(toCamelCase('SCREEN_NAME'));     // screenName
// console.log(toCamelCase('mobile-number'));   // mobileNumber

function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both arguments must be provided and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both arguments must be valid numbers.');
    }
    return a + b;
}

// Examples:
// console.log(addNumbers(5, 3));      // 8
// console.log(addNumbers('5', 3));    // Error: Both arguments must be valid numbers.