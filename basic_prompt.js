function addNumbers(a, b) {
    return a + b;
}

function convertToCamelCase(text) {
    return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}