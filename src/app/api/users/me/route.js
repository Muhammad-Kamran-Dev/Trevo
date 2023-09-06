import getDataFromToken from "../../../../helpers/getDataFromToken";
import { NextResponse } from "next/server";
import User from "../../../../models/userModel";
import { connect } from "../../../../dbConfig/connection";

connect();
export async function GET(request) {
  const token = request.cookies.get("auth-token")?.value || "";
  if (!token)
    return NextResponse.json({
      success: false,
      message: "User must be logged in",
    });

  const id = getDataFromToken(token);
  const userData = await User.findById(id).select("-password");

  return NextResponse.json({
    success: true,
    message: "User Found",
    userData,
  });
}
