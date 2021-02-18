//grants user priveleges for user functions. when action is taken by a user, auth middleware will determine if you are good to go. LITERALLY is the middle man authorizing whether an action can take place such as like, create, delete

import jwt from "jsonwebtoken";


const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; //if token length less than 500 it means it is mine not googles

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, '1142');

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub; //sub is a google id term that differentiates every single user they have
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;