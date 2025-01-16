# robot

A simple robot simulation program that allows you to control a robot within a defined room using text commands.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/baraa2011/robot
   ```
2. Navigate to the project directory:
   ```
   cd robot
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Run the program:
   ```
   node src/main.js
   ```
2. Follow the prompts to enter the room dimensions, the robot's starting position, and the commands to control the robot.

## Commands

- `L`: Turn left
- `R`: Turn right
- `F`: Walk forward

## Example

```
Enter the room width:
5
Enter the room height:
5
Enter the robot's starting position (e.g., 3 3 N):
1 2 N
Enter commands
- L: Turn left
- R: Turn right
- F: Walk forward:
RFRFFRFRF
Final position: (1 3 N)
```

## Test

```
npm test
```
