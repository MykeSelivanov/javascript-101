// Ex1 Use template literals to create a table that prints the following array in a tabular format.
let departures = [
    {
        id: 'KL 1255',
        destination: 'Amsterdam',
        departureTime: '21:55',
        gate: 'A13',
    },
    {
        id: 'OK 001',
        destination: 'Prague',
        departureTime: '20:40',
        gate: 'A13',
        status: 'Check-in'
    },
    {
        id: '4U 2011',
        destination: 'Stuttgart',
        departureTime: '20:35',
        gate: 'A11',
        status: 'Check-in'
    },
    {
        id: 'LX 911',
        destination: 'Zurich',
        departureTime: '20:15',
        expectedDepartureTime: '21:15',
        status: 'check-in'
    },
    {
        id: 'OS 133',
        destination: 'Vienna',
        departureTime: '19:25',
        gate: 'A06',
        status: 'Departed'
    }
];

let headers = {
    id: 'Id',
    destination: 'Destination',
    departureTime: 'DepartureTime',
    expectedDepartureTime: 'Expected Departure Time',
    gate: 'Gate',
    status: 'Status'
}

let tableHeader = `
<tr>
<th>${headers.id}</th>
<th>${headers.destination}</th>
<th>${headers.departureTime}</th>
<th>${headers.expectedDepartureTime}</th>
<th>${headers.gate}</th>
<th>${headers.status}</th>
</tr>
`;

let testTable = `<table>${tableHeader}`;

for (var i = 0; i < departures.length; i++) {
    let departure = departures[i];
    let tableRow = `
	<tr>
	<td>${departure.id}</td>
	<td>${departure.destination}</td>
	<td>${departure.departureTime}</td>
	<td>${departure.expectedDepartureTime}</td>
	<td>${departure.gate}</td>
	<td>${departure.status}</td>
	</tr>
	`;
    testTable += `${tableRow}`;
}
testTable += `</table>`;
console.log(testTable);

// Ex2 Create a tag function that transforms all of its String substitutions into upper case.
let upper = (textArray, ...substitutions) => {
    let template = '';
    for (let i = 0; i < substitutions.length; ++i) {
        let sub = substitutions[i];
        template += textArray[i];
        template += typeof sub === 'string' ?
            sub.toUpperCase() : sub;
    }
    template += textArray[textArray.length - 1];
    return template;
};

let a = 1, b = 'ab', c = 'DeF';
console.log(upper`x ${a} x ${b} x ${c} x`);

// We have a textArray of length substitutions.length - 1. All we need to do is connect the text and substitution segments, and transform each substitution


// Ex3 create a template literal that prints out all the emojis in a tabular format. The rows of the table should be the last 
// character in the hexadecimal code of the emoji (0-F), while the columns should be the fourth character of the emoji (0-4).
let prefix = '1F6';
let digits4 = '01234';
let digits5 = '01234567890ABCDEF';

let rows = `${[...digits4].map(d4 => `
<tr>
<th>${d4}</th>
${[...digits5].map(d5 => `
<td>${String.fromCodePoint(
    '0x' + prefix + d4 + d5)}</td>
`).join('')}
</tr>
` ).join('')}
`;
let template = `<table>
<tr>
<th></th>
${[...digits5].map(c => `<th>${c}</th>`).join('')}
</tr>
${rows}
</table>`;
console.log(template);

// Define the header first. Notice the spread operator to handle the digits4 string as an array of characters.
// Building the rows should be straightforward based on the first exercise.
// - We used String.fromCodePoint( hexString ) to convert a string of a hexadecimal number to a Unicode character. “0x” denotes that the integer parser should parse a hexadecimal number
// - Read the code starting in the rightmost indentation level, and proceed leftwards
// - The map function of […digits4] prepares the cells of each row
// - The map function of […digits5] prepares the five rows of the table
// - Changing the granularity level of the template for debugging purposes is advised.