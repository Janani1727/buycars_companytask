const express = require("express");
const { CarModel } = require("../model/cars.model");
const carRouter = express.Router();

carRouter.get("/", async (req, res) => {

let total=[]
    const {
      price,
      mileage,
      color,
      count
    } = req.query;
    
    const query = {};

    if (price) {
      query.price= { $in: price };
    }
  
    if (mileage) {
      query.mileage = { $in: mileage };
    }
  
    if (color) {
      query.color = { $in: color };
    }

    if (count) {
      query.count = { $in:total.length};
    }
  
    
  
  
    // const sort = {};
    // const pageNumber = page || 1;
    // const pageLimit = limit || 20;
    // const pagination = pageNumber * pageLimit - pageLimit || 0;
    // if (sortBy) {
    //   sort["variant_price"] = sortBy === "asc" ? 1 : "dsc" ? -1 : "" || 1;
    // }
  
    // try {
    //   const data = await DataModel.find(query)
    //     .sort(sort)
    //     .skip(pagination)
    //     .limit(pageLimit);
    //   if (data) {
    //     res.send(data);
    //   } else {
    //     res.send("Data not found");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  try {
    const posts = await CarModel.find(query);
    res.send(posts);
    total.push(posts.length)
    console.log(posts.length)
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