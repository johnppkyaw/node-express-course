const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
      await writeFile(
        './temporary/temp.txt', 
        "This is the first line.\n"
      )
      await writeFile(
        './temporary/temp.txt', 
        "This is the second line.\n",
        {flag: 'a'}
      )
      await writeFile(
        './temporary/temp.txt', 
        "This is the third line.\n",
        {flag: 'a'}
      )
  } catch(err) {
    console.log('Error has occurred: ', err)
  }
}

const reader = async () => {
  try {
    const result = await readFile('./temporary/temp.txt', 'utf8')
    console.log(result);    
  } catch(err) {
    console.log('Error has occurred: ', err)
  }
}

const readWrite = async () => {
  await writer();
  await reader();
}

readWrite();
