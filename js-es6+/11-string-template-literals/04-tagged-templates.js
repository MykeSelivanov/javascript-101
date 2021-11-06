// A template tag is a function performing a transformation on a template literal, returning a string. 
// The signature of a tag function is:
tagFunction(literalFragments, ...substitutionValues)

// - literalFragments is an array of Strings that store fragments of the template literal. 
// We use substitutions to split the original template literal.
// - the rest parameter ...substitutionValues contains the values of ${...} substitutions.

// Salutation tag example
let salutation = literalFragments =>
    'Hello, ' + literalFragments[0];

console.log(salutation`Ashley`); // Hello, Ashley

// If variable substitutions occur inside the template literal, their values can also be manipulated using tag functions.
let price = 5999.9;
let currencySymbol = '€';
let productName = 'Titanium Toothbrush';

let formatCurrency = function (currency, amount) {
    return amount.toFixed(2) + currency;
}

let format = (textArray, ...substitutions) => {
    let template = textArray[0];
    template += substitutions[0];
    template += textArray[1];
    template += formatCurrency(substitutions[1], substitutions[2]);
    template += textArray[3];

    return template;
};