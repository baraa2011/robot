import readline from 'readline';
import welcomeMessage from './utils/welcomeMessage.js';
import getDimension from './utils/getDimension.js';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  welcomeMessage();

  const width = await getDimension(input, '\nEnter the room width: \n');
  const height = await getDimension(input, '\nEnter the room height: \n');

  const room = Array.from({ length: height }, () => Array(width).fill(0));

  console.log(room);
  input.close();
}

main();

export default main;
