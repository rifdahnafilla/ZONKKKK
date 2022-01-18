// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// buat koneksi createConnetction
const db = mysql.createConnection({
  // host, user, password, database
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connect ke db
db.connect(function (err) {
  if (err) {
    console.log("Koneksi gagal " + err);
    return;
  } else {
    console.log("Koneksi berhasil");
    return;
  }
});

// export db
module.exports = db;