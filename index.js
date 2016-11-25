// THE AWESOME QUOTEMACHINE
// -------------------------
//
// ## usage
// var quote = require(qm.js);
// console.log(quote());
//
// -------------------------
//

var _ = require('lodash');

const quotes = [
    { author: 'David Allen', text: 'You can do anything, but not everything.' },
    { author: 'Antoine de Saint-Exupéry', text: 'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away' },
    { text: 'The richest man is not he who has the most, but he who needs the least.', author: 'Unknown Author' },
    { text: 'You miss 100 percent of the shots you never take', author: 'Wayne Gretzky' },
    { text: 'You must be the change you wish to see in the world.', author: 'Gandhi' },
    { text: 'The real voyage of discovery consists not in seeking new lands but seeing with new eyes', author: 'Marcel Proust' }
];


module.exports = () => {
    var s = quotes[_.random(0, (quotes.length -1))];
    return `${s.text}\n--${s.author}`;
}