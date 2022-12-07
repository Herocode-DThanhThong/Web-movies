const mongoose = require("mongoose");
const { Schema } = mongoose;

const PopularFilmSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    imgTrailer: {
      type: String,
      required: true,
    },
    evaluate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    episodes: {
      type: Array,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("filmPopulars", PopularFilmSchema);
