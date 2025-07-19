//async = without Sync in the name
const { writeFile } = require('fs');

console.log('At the start of writeFile');

writeFile(
  './temporary/FileB.txt', 
  "This is the first line. \n",
  (err, result) => {
    if (err) {
      console.log("Error has occurred: ", err);
      return;
    }
    console.log("first line added");

    writeFile(
      './temporary/FileB.txt',
      "This is the second line. \n",
      {flag: 'a'},
      (err, result) => {
        if (err) {
          console.log("Error has occurred: ", err);
          return;
        }
        console.log("second line added");
        writeFile(
          './temporary/FileB.txt',
          "This is the third line. \n",
          {flag: 'a'},
          (err, result) => {
            if (err) {
              console.log("Error has occurred: ", err);
              return;
            }
            console.log("third line added");
          }
        )
      }
    )
  }
)

console.log('At the end'); //out of order.  this appears after the first message.
