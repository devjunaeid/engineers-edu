import mongoose from "mongoose";
const { randomUUID } = require('crypto');

const seminarSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title can not be empty!!"],
    },
    date: {
      type: String,
      required: [true, "Seminar date can not be Null!!"],
    },
    time: {
        type: String,
        optional: true,
        default: "Not specified!",
    },
    platform: {
      type: String,
      optional: true,
      default: "Online",
  },
    registerLink:{
        type: String,
        require: [true, "Povide a registration link!"]
    }
  },
  {
    timestamps: true,
  }
);

const Seminar = mongoose.models.Seminar || mongoose.model("Seminar", seminarSchema);
export default Seminar;
