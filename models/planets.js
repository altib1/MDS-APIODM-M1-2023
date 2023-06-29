const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema(
  {
    fields: {
      name: {
        type: String,
        required: true,
      },
      diameter: {
        type: String,
        required: true,
      },
      rotation_period: {
        type: String,
        required: true,
      },
      orbital_period: {
        type: String,
        required: true,
      },
      gravity: {
        type: String,
        required: true,
      },
      population: {
        type: String,
        required: true,
      },
      climate: {
        type: String,
        required: true,
      },
      terrain: {
        type: String,
        required: true,
      },
      surface_water: {
        type: String,
        required: true,
      },
      films: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "films" }],
        required: false,
      },
      residents: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "people" }],
        required: false,
      },
      url: {
        type: String,
        required: false,
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
  { collection: "planets" }
);

const Planets = mongoose.model("planets", planetsSchema);

module.exports = Planets;