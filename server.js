require("dotenv").config();

const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const swapiRoutes = require("./routes/swapiRoutes");


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
const cors = require('cors');

app.use(cors());

mongoose.connect(
  process.env.MONGO_URL,
  {
    
  }
);

app.use(swapiRoutes);


app.listen(5000, () => {
  console.log("Server is running...");
});
