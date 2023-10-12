require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");
const app = express();
const MONGO_DB = process.env.MONGO_DB;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

// Middlewares:

const corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// ROUTES - CRUD:
app.use("/api/employees", employeeRoutes);

mongoose.connect(MONGO_DB).then(() => {
  console.log("Connected to MongoDB.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
  });
});
