const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  fields: {
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    required: true,
  },
  skin_color: {
    type: String,
    required: true,
  },
  eye_color: {
    type: String,
    required: true,
  },
  birth_year: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  films: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'films',
  }],
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
  }
}}, { collection: 'people' });

const Person = mongoose.model("Person", peopleSchema);

module.exports = Person;