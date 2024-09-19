const express = require("express");
const app = express();
const categoriesRouter = require("./routes/categories-router");

app.use(express.json());
app.use('/api/categories', categoriesRouter);

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000.");
});
