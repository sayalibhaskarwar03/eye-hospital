import express from "express";
import Patient from "../models/Patient.js"; // Ensure this path is correct

const router = express.Router();

// @route   POST /api/patients
// @desc    Register a new patient
router.post("/", async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   GET /api/patients
// @desc    Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// IMPORTANT: This provides the 'default' export your server.js is looking for
export default router;