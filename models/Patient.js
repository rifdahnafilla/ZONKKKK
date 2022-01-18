// import database
const db = require("../config/database");

// class Model patient
class Patient {
  // method untuk querry semua data
  static all() {
    return new Promise((resolve, reject) => {
      // querry ke db
      const sql = "SELECT * FROM patients";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      // query ke db
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    const student = this.find(id);
    return student;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      // query ke db
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // destructing array
        // const [patient] = results;
        resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      // query ke db
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    return this.find(id);
  }

  static async delete(id) {
    return new Promise((resolve, reject) => {
      // query ke db
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export class
module.exports = Patient;