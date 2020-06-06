const express = require("express")
const server = express()

server.use(express.static("public"))


// NunJucks Config - Templete Engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/view", {
  express: server,
  noCache: true
})

// --------- //
//Home
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Seu marketplace de coleta de resíduos" })
})
//Create Point
server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})
//Search Results
server.get("/search", (req, res) => {
  return res.render("search-results.html")
})
// --------- //


server.listen(3000)
