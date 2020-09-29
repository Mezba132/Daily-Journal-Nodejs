const express = require("express");
const app = express();

const route = require("./controller/index");
app.use(route);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
