const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({
    filename: "Client-Layer/Admin-Layer/index.html",
    template: "./src/Client-Layer/Templates/index.html",
    title: "admin-panel",
    chunks: ["Admin"],
  }),
  new HtmlWebpackPlugin({
    filename: "Client-Layer/Blog-Layer/index.html",
    template: "./src/Client-Layer/Templates/index.html",
    title: "project-defiant",
    chunks: ["Blog"],
  }),
];
