const express = require("express");
const env = require("./config/envConfig");
const cors = require("cors");
const connect = require("./config/db");
const userRoutes = require("./routes/users/userRoutes")
const app = express();

// Database connection
connect();
// use cors
app.use(cors());
// Add Middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.json({msg: "Welcome to chawkbazar updated"})
})

// User Routes
app.use("/api", userRoutes);

const port = env.PORT || 4000;

app.listen(port, () => {
    console.log(`Your server is running on port: ${port}`)
})