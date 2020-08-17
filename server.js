import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/src/Routes";
import renderer from "./client/src/helpers/renderer";
import createStore from "./client/src/helpers/createStore";
import { BASE_URL } from "./client/src/helpers/apiConfig";

const app = express();

// Proxy requests to /api through to http://react-ssr-api.herokuapp.com
app.use(
  "/api",
  proxy(BASE_URL, {
    // only needed for this project
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  // Check the path the user wants to view(req.path),
  // then decide which component to render from Routes array.
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    // Call renderer function to send HTML to browser
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
