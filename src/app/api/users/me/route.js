import getDataFromToken from "../../../../helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/userModel";
import { connect } from "../../../../dbConfig/connection";

connect();
export async function GET(request) {
  const id = getDataFromToken(request);
  const userData = await User.findById(id).select("-password");

  return NextResponse.json({
    success: true,
    message: "User Found",
    userData
  });
}
