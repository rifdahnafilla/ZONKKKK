// import model Student
const Patient = require("../models/Patient.js");

// Buat Class StudentController
class PatientController {
  // menambahkan keyboard async
  async index(req, res) {
    // memanggil method static all dengan async await
    const patients = await Patient.all();

    // tampilkan data students
  if (patients) {
    const data = {
      message: "Menampilkan Semua Student",
      data: patients,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: "data not found",
    };
    res.status(404).json(data);
  }
}
  async store(req, res) {
    // destructing object req.body
    const { name, phone, address, status,in_date_at } = req.body;

    // manggil method create dengan async await
    const patients = await Patient.create(req.body);
    // menambahkan data students

    if (!name | !phone | !address | !status| !in_date_at) {
      const data = {
        message: "semua data harus terkirim",
      };
      return res.status(422).json(data);
    } else {
    const data = {
      message: `Menambahkan Data Student`,
      data: patients,
    };
    res.status(201).json(data);
  }
}

async update(req, res) {
  const { id } = req.params;

  const patient = await Patient.find(id);

  if (patient) {
    const patientUpdated = await Patient.update(id, req.body);
    const data = {
      message: "Mengupdate data students",
      data: patientUpdated,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: "Data not found",
    };
    res.status(404).json(data);
  }
}

async destroy(req, res) {
  const { id } = req.params;

  const patient = await Patient.find(id);

  if (patient) {
    await Patient.delete(id);

    const data = {
      message: `menghapus data Patient`,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: "Data not found",
    };
    res.status(404).json(data);
  }
}

async show(req, res) {
  const { id } = req.params;

  const patient = await Patient.find(id);

  if (patient) {
    const data = {
      message: `tampilan detail Student`,
      data: patient,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: "Data not found",
    };
    res.status(404).json(data);
  }
}
}

// Membuat object StudentController
const object = new PatientController();

// Export object StudendtController
module.exports = object;