const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');

const authenticationMiddleware = async(req, res, next) => {
  const authHeader = req.headers.authorization;

  //check if there is authorization header and it starts with Bearer .
    //there is a space after Bearer.
  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('No token provided');
  }
  
  //get the token 
  const token = authHeader.split(" ")[1];

  //validate the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //if successful, decoded will be an object.

    const {id, username} = decoded;
    req.user = {id, username};
    next()
  } catch(error) {
    throw new UnauthenticatedError('Not authorized to access this route');
  }
}

module.exports = authenticationMiddleware;
