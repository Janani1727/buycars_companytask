const express = require("express");
const { CarModel } = require("../model/cars.model");
const carRouter = express.Router();

carRouter.get("/", async (req, res) => {
  try {
    const posts = await CarModel.find();
    res.send(posts);
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error });
  }
});

carRouter.post("/postcar", async (req, res) => {
  const payload = req.body;
  try {
    const post = new CarModel(payload);
    await post.save();
    res.send(" successful");
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error });
  }
});

carRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  try {
    await CarModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "Updated Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong" });
  }
});

carRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await CarModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something went wrong" });
  }
});

module.exports = {
  carRouter,
}