// startsWith   s1.startsWith(s2)   true if and only if s1 starts with s2
// endsWith   s1.endsWith(s2)   true if and only if s1 ends with s2
// includes:   s1.includes(s2)   true if and only if s2 is a substring of s1
// repeat   s.repeat(n)   replicates s n times, and joins them

console.log('Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz'.startsWith( 'Rindfleisch' ));
//> true

console.log('not good'.endsWith( 'good' ));
//> true

console.log('good or bad'.includes( ' or ' ));
//> true

console.log('ha'.repeat( 4 ));
//> 'hahahaha'