var mongoose = require('mongoose');
var categorySchema=new mongoose.Schema({
    'name': {
        'type': String,
        'required': true
    }
});
// collection name
module.exports=mongoose.model('cats', categorySchema);
