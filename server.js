const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require("./config/keys").mongoURI

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected."))
	.catch((err) => console.log(err))

app.use("/exercices", require("./routes/exercices.js"))

app.listen(port, () => {
	console.log(`mern-train server listening on port ${port}.`)
})
