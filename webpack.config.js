const path = require("path");
const dev = process.env.NODE_ENV == "development";
const production = process.env.NODE_ENV == "production";

const live = require("live-server")
if(dev){
  console.log("estoy en modo local");
  live.start({
    root:"./",
    "file":"public/index.html"
  })
}
if(production){
  console.log("estoy en modo production");
  live.start({
    root:"./",
    "file":"public/index.html"
  })
}
module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};