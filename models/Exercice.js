const mongoose = require('mongoose');

const ExerciceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  muscles: {
    type: Array,
    required: true
  }
});

const Exercice = mongoose.model('Exercice', ExerciceSchema);

module.exports = Exercice;
