const getStartPosition = (input, question) => {
  return new Promise((resolve) => {
    const askInput = () => {
      input.question(question, (input) => {
        const match = input.match(/^(\d{1,2})\s?(\d{1,2})\s?([NSEWnsew])$/);
        if (match) {
          const x = parseInt(match[1]);
          const y = parseInt(match[2]);
          const orientation = match[3].toLocaleUpperCase();
          resolve({ x, y, orientation });
        } else {
          console.log('\x1b[31mInvalid position. Please use the format "xxY", e.g., 33N\x1b[0m');
          askInput(); 
        }
      });
    };

    askInput(); 
  });
};

export default getStartPosition;
