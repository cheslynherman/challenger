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

// To register a new user
router.post("/register", (req, res) => {

});

// To delete a single user
router.delete("/user/:id", (req, res)=> {

});

// To add a new book
router.post("/book", (req, res) => {

});

// Display a list of books 
router.get ("/books", (req, res) => {

});

// To display a single book
router.get ("/book/:id", (req, res) => {

});

// modify or replace a books record
router.patch("/book/:id", (req, res) => {

});
router.put("/book/:id", (req, res) => {

});

// delete a book
router.delete("/book/:id", (req, res) => {

});

// add a books author details
router.post("/bookAuthor", (req, res) => {

});

// display a list of books and authors avoid duplicate
router.get("/bookDetails", (req, res) => {

});

// update book author details
router.patch("/bookAuthor/:id", (req, res) => {

});

// remove book author details
router.delete("bookAuthor/:id", (req, res) => {

});

module.exports= router;