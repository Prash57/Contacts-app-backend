const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Please add the contact name"],
    },
    email: {
      type: "string",
      required: [true, "Please add the email address"],
    },
    phone: {
      type: "string",
      required: [true, "Please add the phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
