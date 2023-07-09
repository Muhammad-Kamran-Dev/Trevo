import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default function getDataFromToken(request) {
  try {
    const token = request.cookies.get("auth-token")?.value||'';
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    return decodedToken.id;
    
  
  } catch (error) {
    throw new Error(error.message);
  }
}
