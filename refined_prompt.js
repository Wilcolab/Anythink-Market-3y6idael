/**
 * Converts a string to camelCase format.
 *
 * This function transforms the input string by:
 * - Lowercasing all characters.
 * - Removing underscores, hyphens, and spaces, and capitalizing the following character.
 * - Ensuring the first character is lowercase.
 *
 * @param {string} str - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If the input is not provided, is null, or is not a string.
 *
 * @example
 * toCamelCase('hello_world'); // 'helloWorld'
 * toCamelCase('Hello-World Example'); // 'helloWorldExample'
 */
function toCamelCase(str) {
    if (str === undefined || str === null) {
        throw new Error('Input must be provided and not null.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a valid string.');
    }
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

/**
 * Converts a string to dot.case format.
 *
 * This function transforms the input string by:
 * - Lowercasing all characters.
 * - Replacing underscores, hyphens, and spaces with dots.
 *
 * @param {string} str - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If the input is not provided, is null, or is not a string.
 *
 * @example
 * toDotCase('hello_world'); // 'hello.world'
 * toDotCase('Hello-World Example'); // 'hello.world.example'
 */
function toDotCase(str) {
    if (str === undefined || str === null) {
        throw new Error('Input must be provided and not null.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a valid string.');
    }
    return str
        .toLowerCase()
        .replace(/[_\-\s]+/g, '.');
}


