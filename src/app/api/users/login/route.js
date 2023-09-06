import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connection";
import User from "../../../../models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        message: "Missing required parameters",
      });
    }
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return NextResponse.json({
        success: false,
        message: "User does not Exist's",
      });
    }

    const isPasswordCorrect = await bcryptjs.compare(
      password,
      userExist.password
    );

    if (!isPasswordCorrect)
      return NextResponse.json({
        success: false,
        message: "Invalid Credentials",
      });

    //create a token Data to encrypt
    const tokenData = {
      id: userExist._id,
      name: userExist.name,
      email: userExist.email,
    };

    // sign the Token with secret key
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // create nextResponse
    const response = NextResponse.json({
      success: true,
      message: "Login Successfully",
      jwtToken: token,
    });

    // // setting the cookie to the safest cookie which can not be accessed by any third party from client browser
    response.cookies.set("auth-token", token, {
      httpOnly: true,
    });

    // returning the response with the response
    return response;
  } catch (error) {
    console.log(error);
  }
}
