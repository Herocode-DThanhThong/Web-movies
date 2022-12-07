const mongoose = require("mongoose");
const { Schema } = mongoose;

const TheatersSchema = Schema(
  {
    idSystemTheater: {
      type: String,
      required: true,
      unique: true,
    },
    nameSystemTheater: {
      type: String,
      required: true,
    },
    shortNameSystemTheater: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("theaters", TheatersSchema);
