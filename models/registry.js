const { model, Schema } = require('mongoose');

const registrySchema = new Schema({
  img: {type: String},
  name: {type: String, required: true},
  description: {type: String},
  qty: {type: Number, required: true},
  amount: {type: Number, required: true},
}, {
  timestamps: true
})
module.exports = model('Registry', registrySchema)
