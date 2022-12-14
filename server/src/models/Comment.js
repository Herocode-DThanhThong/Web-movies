const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    idFilm: {
      type: String,
      required: true,
    },
    idUser: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comments", CommentSchema);
