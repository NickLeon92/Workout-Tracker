const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resitanceSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for transaction"
//   },
//   value: {
//     type: Number,
//     required: "Enter an amount"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
});

const Resistance = mongoose.model("Resistance", resitanceSchema);

module.exports = Resistance;