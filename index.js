const readLine = require('readline');
const DrawingCanvas = require('./drawingCanvas.js')
const rl = readLine.createInterface(process.stdin, process.stdout);

const inputCollection = [];
const enterCmd = () => {
  rl.question('enter command: ', (cmd) => {
    inputCollection.push(cmd);
    try {
      if (cmd === 'Q') {
        rl.close();
        return;
      }
      // console.log('User Input Data : ' + inputCollection);
      let drawingInterpretor = new DrawingCanvas(inputCollection);
      let drawText = drawingInterpretor.draw();
      console.log(drawText);
      enterCmd();
    } catch (e) {
      rl.close();
      console.log(e.message);
    }
  })
}

enterCmd();