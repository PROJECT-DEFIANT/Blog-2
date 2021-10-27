/*
Configuration for the Html templates for Blog and Admin apps 
*/
module.exports = {
  AdminConfig: {
    filename: "Client-Layer/Admin-Layer/index.html",
    template: "./src/Client-Layer/Templates/index.html",
    title: "admin-panel",
    chunks: ["Admin"],
  },
  BlogConfig: {
    filename: "Client-Layer/Blog-Layer/index.html",
    template: "./src/Client-Layer/Templates/index.html",
    title: "project-defiant",
    chunks: ["Blog"],
  },
};
