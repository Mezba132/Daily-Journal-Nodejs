const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true, useUnifiedTopology: true});

exports.composeData = () => {
    const indexSchema = {
        title : String,
        date : String,
        content : String
    }

    const Compose = mongoose.model("Compose", indexSchema);
    return Compose;
}