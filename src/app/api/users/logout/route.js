import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    if (!request.cookies.get("auth-token")) {
      return NextResponse.json({
        success: false,
        message: "User is not logged in",
      });
    }

    const response = NextResponse.json({
      success: true,
      message: "User Logout Successfully",
    });

    response.cookies.set("auth-token", "", {
      expires: new Date(0),
      httpOnly: true,
    });

    return response;
  } catch (error) {
    NextResponse.json({
      success: false,
      message: "some",
    });
  }
}
