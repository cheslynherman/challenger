const express = require ("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require ("cors");

// require routes
const routes = require("./routes");

// middleware
app.use(express.json());
app.use(cors());

// use routes
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

