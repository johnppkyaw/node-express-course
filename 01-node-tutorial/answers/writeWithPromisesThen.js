const { writeFile, readFile } = require("fs").promises;

writeFile('./temporary/temp.txt', "This is line A.\n")
.then(() => {
  return writeFile('./temporary/temp.txt', "This is line B.\n", {flag: 'a'})
})
.then(() => {
  return writeFile('./temporary/temp.txt', "This is line C.\n", {flag: 'a'})
})
.then(() => {
  return readFile('./temporary/temp.txt', 'utf8')
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.log("An error occurred: ", error)
})
