// Rule 1: use let for variables, and const for constants whenever possible.
// Use var only when you have to maintain legacy code.

// Rule 2: Always declare and initialize all your variables at the beginning of your scope.

// Using rule 2 implies that you never have to face with the temporal dead zone.

// If you have a linter such as ESLint, set it up accordingly, so that it warns you when you violate the second rule.

// If you stick to these two rules, you will get rid of most of the anomalies developers face.