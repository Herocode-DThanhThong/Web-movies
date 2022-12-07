const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChildrenTheatersSchema = Schema(
  {
    idSystemTheater: {
      type: String,
      required: true,
      unique: true,
    },
    nameSystemTheater: {
      type: String,
    },
    address: {
      type: String,
    },
    listChildrenTheater: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("childrenTheaters", ChildrenTheatersSchema);
