const express = require("express");
require("dotenv").config();
// comment
const app = express();
app.use(express.json());
app.use("/api/chat/", require("./routes/openApiRoutes"));

app.listen(5000, () => {
  console.log("server is running");
});
