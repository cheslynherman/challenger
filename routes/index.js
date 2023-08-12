const express = require ("express");
const router = express.Router();

// Define routes here

// GET / - Home page displaying all routes
router.get("/", (req, res) => {
    // Implement logic to display routes and descriptions
});

// GET /users - Display a list of users
router.get("/users", (req, res) => {
    // implement logic to fetch and display users
});

// GET /user/:id - Display a single user
router.get("/user/:id", (req, res) => {
    // Implement logic to fetch and display a single user
});

// PUT /user/:id - Update users record
router.put("/user/:id", (req, res) => {
    // implement logic to update a users record
});

// PATCH /user/:id - Modify a users record
router.patch("/user/:id", (req, res) => {
    // Implement logic to modify a users record
});

// and so on for other routes

module.exports= router;