var mongoose = require('mongoose');

var freeTextSchema = mongoose.Schema({ label:String,readonly:String,owner:String, status:String,name: String, question: String, response: String, imageId: String, wrongMessage: String, correctMessage: String })

module.exports = mongoose.model('FreeText', freeTextSchema);
