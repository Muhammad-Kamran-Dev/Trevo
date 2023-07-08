import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You Must Enter Your Name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "You Must Enter Email"],
    unique: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    trim: true,
    required: [true, "You Must Enter a Password"]
  },
  fotgotPasswordToken: String,
  fotgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date
});
const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;
