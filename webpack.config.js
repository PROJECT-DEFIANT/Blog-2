const path = require("path");

module.exports = () => {
  return {
    mode:
      process.env.NODE_ENV_MODE === "production" ? "production" : "development",
    /* NODE_ENV_MODE is set in the production script for the production, if not set than  use  developments
     */
    target: process.env.MODE_ENV_MODE === "production" ? "browserlist" : "web",
    /* Use web or browserlist: defaults -https://github.com/browserslist/browserslist#best-practices for the configuration as we target webpack for the front of our application */
    entry: path.resolve(__dirname, "src", "Client-Layer", "index.js"),
    // output directory, where webpack will bundle our code
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "Dist", "Client-Layer"),
      assetModuleFilename: "Images/[name][ext]",
    },
  };
};
