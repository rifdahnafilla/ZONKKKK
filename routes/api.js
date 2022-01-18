// TODO 2: SETUP ROUTING (ROUTER)
// import Student Controller
const PatientController = require("../controllers/PatientController");
// import express
const express = require("express");

//buat routing modular
const router = express.Router();

// definisikan routing
// callback function
router.get("/", (req, res) => {
    res.send("Hello Jasmin");
});

router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
// router.put("/patients/:id", PatientController.update);
// router.delete("/patients/:id", PatientController.destroy);
// router.get("/patients/:id", PatientController.show);
//  router.get("/patients/search/:name", PatientController.search);
//  router.get("/patients/status/positive", PatientController.positive);
//  router.get("/patients/status/recovered", PatientController.recovered);
// router.get("/patients/status/ded", PatientController.dead);

module.exports = router;
