const express = require("express");
const axios = require("axios");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const app = express();
const port = process.env.PORT || 3001;

app.get("/apy", async (req, res) => {
  try {
    await client.connect();

    const database = client.db("vault");
    const collection = database.collection("apy");

    const query = { name: "Curve cvxCRV" };
    const vault = await collection.findOne(query);

    return res.json(vault);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
  // const valuts = ["0x4560b99C904aAD03027B5178CCa81584744AC01f"];
  // axios
  //   .get(process.env.YEARN_API_URL)
  //   .then((r) => res.send(r.data))
  //   .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
