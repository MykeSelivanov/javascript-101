// A template tag is a function performing a transformation on a template literal, returning a string. 
// The signature of a tag function is:
tagFunction(literalFragments, ...substitutionValues)

// - literalFragments is an array of Strings that store fragments of the template literal. 
// We use substitutions to split the original template literal.
// - the rest parameter ...substitutionValues contains the values of ${...} substitutions.