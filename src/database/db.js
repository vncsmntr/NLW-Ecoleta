const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.run(`DELETE FROM places WHERE id = ?`, [], function(err){
//   if (err) {
//     return console.log(err)
//   }
//   console.log("Registro deletado com sucesso!")
// })