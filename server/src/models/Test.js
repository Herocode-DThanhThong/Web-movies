const mongoose = require("mongoose");
const { Schema } = mongoose;

const TestSchema = Schema(
  {
    name: {
      type: String,
    },
    episodes: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("test", TestSchema);
