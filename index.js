import express from "express";
import cors from "cors";
import models from "./models.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/test/info", (req, res) => {
  res.json(models.schemaInfo());
});

app.get("/user/list", (req, res) => {
  res.json(models.userListModel());
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json(models.userModel(id));
});

app.get("/photosOfUser/:id", (req, res) => {
  const id = req.params.id;
  res.json(models.photoOfUserModel(id));
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
