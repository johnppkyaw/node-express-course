const { people } = require("../data");
let currentMaxId = people.length;

const getPeople = (req, res) => {
  return res.json(people);
}

const addPerson = (req, res) => {
  if(req.body.name) {
    currentMaxId++;
    people.push({id: currentMaxId, name: req.body.name });
    return res.status(201).json({ success: true, name: req.body.name});
  } else {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
}

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id);
  const targetPerson = people.find((person) => {
    return person.id === id;
  });
  if(targetPerson) {
    return res.status(200).json(targetPerson);
  } else {
    return res.status(404).json({ message: `No person with the id, ${id}, found.`})
  }
}

const editPersonById = (req, res) => {
  const id = parseInt(req.params.id);
  const nameToEdit = req.body.name;

  const targetPerson = people.find((person) => {
    return person.id === id;
  });
  if(targetPerson) {
    targetPerson.name = nameToEdit;
    return res.status(200).json({ success: true, person: targetPerson});
  } else {
    return res.status(404).json({ success: false, message: `No person with the id, ${id}, found.`})
  }
}

const deletePersonById = (req, res) => {
  const id = parseInt(req.params.id);
  let targetIndex;
  const targetPerson = people.find((person, index) => {
    if (person.id === id) {
      targetIndex = index;
      return person;
    }
  });

  if(targetPerson) {
    people.splice(targetIndex, 1);
    return res.status(200).json({ success: true, message: `The person with the id, ${id}, has been removed.`});
  } else {
    return res.status(404).json({ success: false, message: `No person with the id, ${id}, found.`})
  }
}

module.exports = { addPerson, getPeople, getPersonById, editPersonById, deletePersonById };
