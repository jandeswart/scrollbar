/**
 * Start the server with: * npm run dev *
 */

const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

/** The location of the static files: */
app.use(express.static(__dirname));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

/** Run the server: */
app.listen(PORT);

console.log(`The app is running at port ${PORT}`);
