import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const response = NextResponse.json({
      success: true,
      message: "User Logout Successully"
    });

    response.cookies.set("auth-token", "", {
      expires: new Date(0),
      httpOnly: true
    });
    return response;
  } catch (error) {
    NextResponse.json({
      success: false,
      message: "some"
    });
  }
}
