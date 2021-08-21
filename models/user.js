const {model, Schema} = require('mongoose');

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
  //where do we veryify them? Can we have them enter their password twice?
}, {
  timestamps: true
})
module.exports = model('User', userSchema)
