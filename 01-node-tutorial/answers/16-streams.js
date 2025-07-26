const { createReadStream } = require('fs');

const options = {
  encoding: 'utf8', 
  highWaterMark: 200
}

const stream = createReadStream('../content/big.txt', options);

let counter = 0;

stream.on('data', (result) => {
  counter++;
  console.log(result);
})

stream.on('end',() => {
  console.log("The number of chunks received: ", counter);
})

stream.on('error', (err) => {
  console.log("Error occurred: ", err);
})
