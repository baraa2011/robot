const getDimension = (input, question) => {
  return new Promise((resolve) => {
    const getInput = () => {
      input.question(question, (input) => {
        const number = parseInt(input);
        if (number > 10) {
          console.log('\x1b[31mInvalid input. Please enter a number less than or equal to 10.\x1b[0m');
          getInput();
        } else if (isNaN(number)) {
          console.log('\x1b[31mInvalid input. Please enter a valid number.\x1b[0m');
          getInput();
        } else if (number <= 0) {
          console.log('\x1b[31mInvalid input. Please enter a positive number.\x1b[0m');
          getInput();
        } else {
          resolve(number);
        }
      });
    };

    getInput(); 
  });
};

export default getDimension;
