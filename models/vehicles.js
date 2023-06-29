const mongoose = require("mongoose");

const vehiclesSchema = new mongoose.Schema(
  {
    fields: {
      name: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      vehicle_class: {
        type: String,
        required: true,
      },
      manufacturer: {
        type: String,
        required: true,
      },
      cost_in_credits: {
        type: String,
        required: true,
      },
      length: {
        type: String,
        required: true,
      },
      crew: {
        type: String,
        required: true,
      },
      passengers: {
        type: String,
        required: true,
      },
      max_atmosphering_speed: {
        type: String,
        required: true,
      },
      cargo_capacity: {
        type: String,
        required: true,
      },
      consumables: {
        type: String,
        required: true,
      },
      films: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "films" }],
        required: false,
      },
      pilots: {
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
  { collection: "vehicles" }
);

const Vehicles = mongoose.model("vehicles", vehiclesSchema);

module.exports = Vehicles;