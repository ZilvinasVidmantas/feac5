const express = require("express");

const categoriesRouter = express.Router();

let nextCaregoryId = 3;
const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" }
];

categoriesRouter.get("/", (req, res) => {
  res.json(categories);
});

categoriesRouter.get("/:id", (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).send("Category not found.");
  res.json(category);
});

categoriesRouter.post("/", (req, res) => {
  const category = {
    id: ++nextCaregoryId,
    name: req.body.name
  };
  categories.push(category);
  res.status(201).json(category);
});

categoriesRouter.put("/:id", (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).send("Category not found.");

  category.name = req.body.name;
  res.json(category);
});

categoriesRouter.delete("/:id", (req, res) => {
  const categoryIndex = categories.findIndex(c => c.id === parseInt(req.params.id));
  if (categoryIndex === -1) return res.status(404).send("Category not found.");

  const [deletedCategory] = categories.splice(categoryIndex, 1);
  res.json(deletedCategory);
});

module.exports = categoriesRouter;
