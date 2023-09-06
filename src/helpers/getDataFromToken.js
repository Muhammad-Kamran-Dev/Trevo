import jwt from "jsonwebtoken";

export default function getDataFromToken(token) {
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
}
