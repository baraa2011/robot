const drawRoom = (room, x, y) => {
  const height = room.length;
  const width = room[0].length;

  for (let row = 0; row < height; row++) {
    let line = '';
    for (let col = 0; col < width; col++) {
      line += row === y && col === x ? '🤖 ' : '- ';
    }
    console.log(line.trim());
  }
};

export default drawRoom;
