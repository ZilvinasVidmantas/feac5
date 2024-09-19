const express = require("express");
const app = express();
const categoriesRouter = require("./routes/categories-router");
const cors = require("cors");
require('dotenv').config();

app.use(express.json());
app.use('/api/categories', categoriesRouter);
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});
