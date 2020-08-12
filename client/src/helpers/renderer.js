import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../components/Home";

export default () => {
  const content = renderToString(<Home />);

  // Send client side bundle to browser
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
