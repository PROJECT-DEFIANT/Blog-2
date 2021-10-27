const path = require("path");
// const HtmlWebpackPluginConfig = require(".Project-config/HtmlWebpackPlugin.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    /* NODE_ENV_MODE is set in the production script for the production, if not set than  use  developments
     */
    mode:
      process.env.NODE_ENV_MODE === "production" ? "production" : "development",
    /* Use web or browserlist: defaults -https://github.com/browserslist/browserslist#best-practices for the configuration as we target webpack for the front of our application */
    target: process.env.MODE_ENV_MODE === "production" ? "browserlist" : "web",
    /*
        two entry points for the app - one for the background app - CMS like (Admin) and second for front app (Blog)
    */
    entry: {
      Admin: {
        import: "./src/Client-Layer/Admin-Layer/index.js",
        filename: "./Client-Layer/Admin-Layer/[name].js",
      },
      Blog: {
        import: "./src/Client-Layer/Blog-Layer/index.js",
        filename: "./Client-Layer/Blog-Layer/[name].js",
      },
    },

    // output directory, where webpack will bundle our code, resolves to Dist/Client-Layer
    output: {
      path:
        process.env.NODE_ENV_MODE === "production"
          ? path.resolve(__dirname, "Prod")
          : path.resolve(__dirname, "Dist"),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: path.resolve("./node_modules"),
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
