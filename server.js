import express from "express";
import renderer from "./client/src/helpers/renderer";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  // Call renderer function to send HTML to browser
  res.send(renderer(req));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
