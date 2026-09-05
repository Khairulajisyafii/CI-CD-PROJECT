const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Apple Academy CI/CD Project",
  });
});

app.get("/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn CI/CD",
    },
  ]);
});

// Jalankan server hanya ketika dijalankan secara lokal
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
