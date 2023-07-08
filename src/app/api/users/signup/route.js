import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connection";
import User from "../../../../models/userModel";
import bcryptjs from "bcryptjs";
connect();

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json({
        success: false,
        message: "This user already Exist's"
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    const savedUser = await user.save();

    return NextResponse.json({
      success: true,
      message: "User created Successfully",
      savedUser
    });
  } catch (error) {
    console.log(error.message);
  }
}
