const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("test sucess");
});

app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});
