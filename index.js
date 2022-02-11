/* eslint-disable no-console
*/

// premade style rules with ESLint
//    1. quotes
//    2. semi
//    3. space-infix-ops
//    4. key-spacing
//    5. prefer-const
//    6. no-multiple-empty-lines
//    7. no-self-compare
//    8. indent
//    9. comma-dagle
//   10. disable no-console
//   11. object-curley-spacing
import http from 'http';
import readline from 'readline';
import * as i from './add';

// import add file function
console.log(i.sayLoud('Whoot!')); // Output: WHOOT!

// funcation to airbnb
const SayHello = () => console.log('ESlint rule tested successfully.');
SayHello();

const text = 'aas';
if ((12 === 111 || text === 'ads')) {
  console.log('YAH');
}

// get input from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processSum(number) {
  // Insert code to do whatever with sum here.
  console.log('The sum is', number);
}

rl.question('Enter a number: ', (score1) => {
  rl.question('Enter another number: ', (score2) => {
    const totalScore = score1 + score2;
    processSum(totalScore);

    rl.close();
  });
});

const server = http.createServer((req, res) => {
  res.end(`${i.sayLoud('Whoot!')}`, 'Server started successfully!', i.add(1, 2));
}).listen(3000);

export default server;
