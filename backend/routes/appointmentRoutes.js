import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// @route   POST /api/appointments
// @desc    Create a new appointment
router.post("/", async (req, res) => {
  try {
    // Log data to terminal to verify what React is sending
    console.log("New Appointment Request:", req.body);

    const newAppointment = new Appointment(req.body);
    const savedAppointment = await newAppointment.save();
    
    res.status(201).json(savedAppointment);
  } catch (error) {
    console.error("Database Save Error:", error.message);
    res.status(400).json({ message: error.message });
  }
});

// @route   GET /api/appointments
// @desc    Get all appointments (used by the Dashboard)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;