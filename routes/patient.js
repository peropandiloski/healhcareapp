var express = require('express');
var router = express.Router();
const Patient = require('../models/patient');


// Patients ROUTES
router
    .get('/', (req, res) => {
        res.render('index', { title: 'Express' });
    })
    .get('/patients', async (req, res) => {
        const patients = await Patient.find();

        res.render('patients/index', { patients: patients });
    })
    .get('/patients/create', (req, res) => {
        res.render('patients/create');
    })
    .get('/patients/:id', async (req, res) => {
        const patient = await Patient.findById(req.params.id)

        res.render('patients/update', patient)
    })
    .post('/patients', async (req, res) => {
        try {
            const patient = new Patient(req.body)
            await patient.save()

            res.redirect('/patients')
        } catch (error) {
            res.render('patients/create', {
                ...req.body,
                error: error.message
            })
        }
    })
    .post('/patients/:id', async (req, res) => {
        try {
            await Patient.findByIdAndUpdate(req.params.id, req.body)

            res.redirect('/patients')
        } catch (error) {
            res.render('patients/update', {
                ...req.body,
                error: error.message
            })
        }
    })



module.exports = router;
