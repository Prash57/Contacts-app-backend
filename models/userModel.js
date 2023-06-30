const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: "string",
      required: [true, "Please add the username"],
    },
    email: {
      type: "string",
      required: [true, "Please add the email"],
      unique: [true, "Email is already in use"],
    },
    password: {
      type: "string",
      required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
