import readline from 'readline';
import welcomeMessage from './utils/welcomeMessage.js';
import getDimension from './utils/getDimension.js';
import getStartPosition from './utils/getStartPosition.js';
import isPositionValid from './utils/isPositionValid.js';
import drawRoom from './utils/drawRoom.js';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  welcomeMessage();

  const width = await getDimension(input, '\nEnter the room width: \n');
  const height = await getDimension(input, '\nEnter the room height: \n');

  const room = Array.from({ length: height }, () => Array(width).fill(0));
  let { x, y, orientation } = await getStartPosition(input, "\nEnter the robot's starting position (e.g., 3 3 N): \n");

  if (!isPositionValid(x, y, width, height)) {
    console.error('\x1b[31mInvalid starting position. \nExiting...\x1b[0m');
    input.close();
    process.exit(1);
  }

  console.log(`\nStarting position: (${x} ${y}) ${orientation}`);
  drawRoom(room, x, y);

  input.close();
}

main();

export default main;
