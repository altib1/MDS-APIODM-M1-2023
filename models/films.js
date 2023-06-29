const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  fields: {
  title: {
    type: String,
    required: true,
  },
  episode_id: {
    type: String,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
  }],
  planets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Planet',
  }],
  starships: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Starship',
  }],
  vehicles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
  }],
  species: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Species',
  }],
  url: {
    type: Array,
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
}}, { collection: 'films' });

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;