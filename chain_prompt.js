/**
 * Converts a string to kebab-case format.
 *
 * This function transforms the input string by:
 * - Lowercasing all characters.
 * - Replacing underscores, hyphens, and spaces with hyphens.
 * - Keeping numbers at the end of the string.
 * - Displays the result with a prefixed message.
 *
 * @param {string} str - The string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string with a prefixed message.
 * @throws {Error} If the input is not provided, is null, or is not a string.
 *
 * @example
 * toKebabCase('Hello World 123'); // 'Result: hello-world-123'
 */
function toKebabCase(str) {
    if (str === undefined || str === null) {
        throw new Error('Input must be provided and not null.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a valid string.');
    }
    // Extract trailing numbers
    const match = str.match(/(.*?)(\d+)$/);
    let mainPart, numberPart;
    if (match) {
        mainPart = match[1];
        numberPart = match[2];
    } else {
        mainPart = str;
        numberPart = '';
    }
    const kebab = mainPart
        .toLowerCase()
        .replace(/[_\-\s]+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/^-+|-+$/g, '');
    const result = numberPart ? `${kebab}-${numberPart}` : kebab;
    return `Result: ${result}`;
}