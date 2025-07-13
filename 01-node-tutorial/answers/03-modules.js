const persons = require('./04-names.js');
const introThePerson = require('./05-utils.js');
const someCommands = require('./06-alternative-flavor.js');

introThePerson(persons.person01);
introThePerson(persons.person02);
introThePerson(persons.person03);

someCommands.haveASeat();
someCommands.sayThanks();

require('./07-mind-grenade.js');
