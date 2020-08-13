import express from "express";
import renderer from "./client/src/helpers/renderer";
import createStore from "./client/src/helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  // Call renderer function to send HTML to browser
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
