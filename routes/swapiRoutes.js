const express = require("express");
const filmsModel = require("../models/films");
const peopleModel = require("../models/people");
const planetsModel = require("../models/planets");
const speciesModel = require("../models/species");
const starshipModel = require("../models/starships");
const vehiclesModel = require("../models/vehicles");

const app = express();

/** FILMS */

// Get all films
app.get("/films", async (req, res) => {
  try {
    const films = await filmsModel.find({});
    res.send(films);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Get a specific film by ID
app.get('/films/:id', async (req, res) => {
  try {
    const film = await filmsModel.findById(req.params.id);
    if (!film) {
      return res.status(404).send({ error: "Film not found" });
    }
    res.send(film);
  } catch (error) {
    res.status(404).send({ error: "Film not found" });
  }
});

// Create a new film
app.post("/films", async (req, res) => {
  try {
    const film = new filmsModel(req.body);
    await film.save();
    res.status(201).send(film);
  } catch (error) {
    res.status(400).send({ error: "Invalid request" });
  }
});

// Update a film by ID
app.patch("/films/:id", async (req, res) => {
  try {
    const film = await filmsModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!film) {
      return res.status(404).send({ error: "Film not found" });
    }
    res.send(film);
  } catch (error) {
    res.status(404).send({ error: "Film not found" });
  }
});

// Delete a film by ID
app.delete("/films/:id", async (req, res) => {
  try {
    const film = await filmsModel.findByIdAndDelete(req.params.id);
    if (!film) {
      return res.status(404).send({ error: "Film not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send({ error: "Film not found" });
  }
});

/** PEOPLE */

// Get all people
app.get("/people", async (req, res) => {
  try {
    const people = await peopleModel.find({});
    res.send(people);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Get a specific person by ID
app.get('/people/:id', async (req, res) => {
  try {
    const person = await peopleModel.findById(req.params.id);
    if (!person) {
      return res.status(404).send({ error: "Person not found" });
    }
    res.send(person);
  } catch (error) {
    res.status(404).send({ error: "Person not found" });
  }
});

// Create a new person
app.post("/people", async (req, res) => {
  try {
    const person = new peopleModel(req.body);
    await person.save();
    res.status(201).send(person);
  } catch (error) {
    res.status(400).send({ error: "Invalid request" });
  }
});

// Update a person by ID
app.patch("/people/:id", async (req, res) => {
  try {
    const person = await peopleModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!person) {
      return res.status(404).send({ error: "Person not found" });
    }
    res.send(person);
  } catch (error) {
    res.status(404).send({ error: "Person not found" });
  }
});

// Delete a person by ID
app.delete("/people/:id", async (req, res) => {
  try {
    const person = await peopleModel.findByIdAndDelete(req.params.id);
    if (!person) {
      return res.status(404).send({ error: "Person not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send({ error: "Person not found" });
  }
});

/** PLANETS */

// Get all planets
app.get("/planets", async (req, res) => {
  try {
    const planets = await planetsModel.find({});
    res.send(planets);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Get a specific planet by ID
app.get('/planets/:id', async (req, res) => {
  try {
    const planet = await planetsModel.findById(req.params.id);
    if (!planet) {
      return res.status(404).send({ error: "Planet not found" });
    }
    res.send(planet);
  } catch (error) {
    res.status(404).send({ error: "Planet not found" });
  }
});

// Create a new planet
app.post("/planets", async (req, res) => {
  try {
    const planet = new planetsModel(req.body);
    await planet.save();
    res.status(201).send(planet);
  } catch (error) {
    res.status(400).send({ error: "Invalid request" });
  }
});

// Update a planet by ID
app.patch("/planets/:id", async (req, res) => {
  try {
    const planet = await planetsModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!planet) {
      return res.status(404).send({ error: "Planet not found" });
    }
    res.send(planet);
  } catch (error) {
    res.status(404).send({ error: "Planet not found" });
  }
});

// Delete a planet by ID
app.delete("/planets/:id", async (req, res) => {
  try {
    const planet = await planetsModel.findByIdAndDelete(req.params.id);
    if (!planet) {
      return res.status(404).send({ error: "Planet not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send({ error: "Planet not found" });
  }
});

/** SPECIES */

// Get all species
app.get("/species", async (req, res) => {
  try {
    const species = await speciesModel.find({});
    res.send(species);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Get a specific species by ID
app.get('/species/:id', async (req, res) => {
  try {
    const specie = await speciesModel.findById(req.params.id);
    if (!specie) {
      return res.status(404).send({ error: "Species not found" });
    }
    res.send(specie);
  } catch (error) {
    res.status(404).send({ error: "Species not found" });
  }
});

// Create a new species
app.post("/species", async (req, res) => {
  try {
    const specie = new speciesModel(req.body);
    await specie.save();
    res.status(201).send(specie);
  } catch (error) {
    res.status(400).send({ error: "Invalid request" });
  }
});

// Update a species by ID
app.patch("/species/:id", async (req, res) => {
  try {
    const specie = await speciesModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!specie) {
      return res.status(404).send({ error: "Species not found" });
    }
    res.send(specie);
  } catch (error) {
    res.status(404).send({ error: "Species not found" });
  }
});

// Delete a species by ID
app.delete("/species/:id", async (req, res) => {
  try {
    const specie = await speciesModel.findByIdAndDelete(req.params.id);
    if (!specie) {
      return res.status(404).send({ error: "Species not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send({ error: "Species not found" });
  }
});

/** STARSHIPS */

// Get all starships
app.get("/starships", async (req, res) => {
  try {
    const starships = await starshipModel.find({});
    res.send(starships);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Get a specific starship by ID
app.get('/starships/:id', async (req, res) => {
  try {
    const starship = await starshipModel.findById(req.params.id);
    if (!starship) {
      return res.status(404).send({ error: "Starship not found" });
    }
    res.send(starship);
  } catch (error) {
    res.status(404).send({ error: "Starship not found" });
  }
});

// Create a new starship
app.post("/starships", async (req, res) => {
  try {
    const starship = new starshipModel(req.body);
    await starship.save();
    res.status(201).send(starship);
  } catch (error) {
    res.status(400).send({ error: "Invalid request" });
  }
});

// Update a starship by ID
app.patch("/starships/:id", async (req, res) => {
  try {
    const starship = await starshipModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!starship) {
      return res.status(404).send({ error: "Starship not found" });
    }
    res.send(starship);
  } catch (error) {
    res.status(404).send({ error: "Starship not found" });
  }
});

// Delete a starship by ID
app.delete("/starships/:id", async (req, res) => {
  try {
    const starship = await starshipModel.findByIdAndDelete(req.params.id);
    if (!starship) {
      return res.status(404).send({ error: "Starship not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send({ error: "Starship not found" });
  }
});

/** VEHICLES */

// Get all vehicles
app.get("/vehicles", async (req, res) => {
  try {
    const vehicles = await vehiclesModel.find({});
    res.send(vehicles);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

// Get a specific vehicle by ID
app.get('/vehicles/:id', async (req, res) => {
  try {
    const vehicle = await vehiclesModel.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).send({ error: "Vehicle not found" });
    }
    res.send(vehicle);
  } catch (error) {
    res.status(404).send({ error: "Vehicle not found" });
  }
});

// Create a new vehicle
app.post("/vehicles", async (req, res) => {
  try {
    const vehicle = new vehiclesModel(req.body);
    await vehicle.save();
    res.status(201).send(vehicle);
  } catch (error) {
    res.status(400).send({ error: "Invalid request" });
  }
});

// Update a vehicle by ID
app.patch("/vehicles/:id", async (req, res) => {
  try {
    const vehicle = await vehiclesModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!vehicle) {
      return res.status(404).send({ error: "Vehicle not found" });
    }
    res.send(vehicle);
  } catch (error) {
    res.status(404).send({ error: "Vehicle not found" });
  }
});

// Delete a vehicle by ID
app.delete("/vehicles/:id", async (req, res) => {
  try {
    const vehicle = await vehiclesModel.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).send({ error: "Vehicle not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(404).send({ error: "Vehicle not found" });
  }
});

module.exports = app;