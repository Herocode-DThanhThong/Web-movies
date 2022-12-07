const mongoose = require("mongoose");
const { Schema } = mongoose;

const BannerSchema = Schema(
  {
    idYoutube: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("banners", BannerSchema);
