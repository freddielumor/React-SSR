import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/src/components/Home";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  // Render React Home component to string
  const content = renderToString(<Home />);

  // Send client side bundle to browser
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  // Send HTML file to browser
  res.send(html);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
