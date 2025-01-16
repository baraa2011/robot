const getCommands = (input, question) => {
  return new Promise((resolve) => {
    const getInput = () => {
      input.question(question, (commands) => {
        if (/^[LRFlrf]+$/.test(commands)) {
          resolve(commands);
        } else {
          console.log('\x1b[31m\nInvalid input. Please enter a sequence of L, R, or F.\x1b[0m');
          getInput();
        }
      });
    };
    getInput();
  });
};

export default getCommands;
