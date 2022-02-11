const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

const cors = require("cors");
app.use(cors());
app.use(express.json());

MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("code_info");
    const codeLanguage = db.collection("language");
    const languageRouter = createRouter(codeLanguage);
    app.use("/api/topics", languageRouter);
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log(`App running on port ${this.address().port}`);
});
