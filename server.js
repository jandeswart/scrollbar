/**
 * Start the server with: npm run dev
 */

const express = require("express");
// const { dirname } = require("path");
const app = express();
const path = require("path");

app.use(express.static(__dirname));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;

app.listen(PORT);

console.log(`The app is running at port ${PORT}`);
