const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployees,
  getSingleEmployee,
  updateEmployee,
  removeEmployee,
} = require("../controllers/employeeControllers");
// Routes:

// Create
router.post("/", createEmployee);
// Get
router.get("/", getEmployees);
// Get one
router.get("/:id", getSingleEmployee);
// // Update
router.put("/:id", updateEmployee);
// // Delete
router.delete("/:id", removeEmployee);
module.exports = router;
