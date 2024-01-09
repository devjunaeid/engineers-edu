import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name can not be empty!!"],
    },
    userID: {
      type: String,
      required: [true, "UserID can not be Null"],
      unique: [true, "The user already exists!!"],
    },
    passwd: {
      type: String,
      required: [true, "Password can not be Null"],
    },
    role: {
        type: String,
        optional: true,
        default: "usr"
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
