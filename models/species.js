const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema(
  {
    fields: {
      name: {
        type: String,
        required: true,
      },
      classification: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      average_height: {
        type: String,
        required: true,
      },
      average_lifespan: {
        type: String,
        required: true,
      },
      hair_colors: {
        type: String,
        required: true,
      },
      skin_colors: {
        type: String,
        required: true,
      },
      eye_colors: {
        type: String,
        required: true,
      },
      homeworld: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "planets",
        required: true,
      },
      language: {
        type: String,
        required: true,
      },
      people: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "people" }],
        required: true,
      },
      films: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "films" }],
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      created: {
        type: Date,
        required: false,
      },
      edited: {
        type: Date,
        required: false,
      },
    },
  },
  { collection: "species" }
);

const Species = mongoose.model("species", speciesSchema);

module.exports = Species;