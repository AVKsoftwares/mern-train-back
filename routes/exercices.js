const express = require("express")
const router = express.Router()

const Exercice = require("../models/Exercice")

router.get("/", (req, res) => {
	Exercice.find({}).then((exercices) => {
		res.json(exercices)
	})
})

router.get("/:id", (req, res) => {
	Exercice.findOne({ _id: req.params.id }).then((exercice) => {
		res.json(exercice)
	})
})

router.post("/create", (req, res) => {
	Exercice.create(req.body, function (err) {
		if (err) return handleError(err)
		res.send("created")
	})
})

router.get("/delete/:id", (req, res) => {
	Exercice.deleteOne({ _id: req.params.id }, function (err) {
		if (err) return handleError(err)
		res.send("deleted")
	})
})

router.post("/update/:id", (req, res) => {
	Exercice.updateOne(
		{ _id: req.params.id },
		req.body,
		function (err, response) {
			if (err) return handleError(err)
			res.send("updated")
		}
	)
})
module.exports = router
