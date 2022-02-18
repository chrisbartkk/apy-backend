const express = require("express");
const axios = require("axios");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri =
  "mongodb+srv://chrisbartkoski:snowbeauty78@apy-cluster.aom2k.mongodb.net?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express();
const port = 3001;

async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const comments = database.collection("comments");
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: "Mercedes Tyler" };
    const comment = await comments.findOne(query);
    console.log(comment);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  const valuts = ["0x4560b99C904aAD03027B5178CCa81584744AC01f"];
  axios
    .get(process.env.YEARN_API_URL)
    .then((r) => res.send(r.data))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
