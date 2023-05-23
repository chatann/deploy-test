const express = require("express");
const router = require("./utils/router");

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
