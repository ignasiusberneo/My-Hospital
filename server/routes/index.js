const express = require("express");
const router = express.Router();
const PatientController = require('../controllers/patientController')

router.get('/patients', PatientController.getPatients)
router.get('/patients/:id', PatientController.getPatientById)
router.post('/patients', PatientController.addPatient)
router.put('/patients/:id', PatientController.updatePatient)
router.delete('/patients/:id', PatientController.deletePatient)

module.exports = router