var mongoose = require("mongoose");
var Note = require("./Note");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    link: {
        type: String,
        required: true
    }, 
    saved: {
        type: Boolean,
        default: false
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;