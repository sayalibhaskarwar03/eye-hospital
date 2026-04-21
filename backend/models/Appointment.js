import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  // Changed to String because you are using custom IDs like "MEH-8425"
  patientId: {
    type: String, 
    required: true
  },
  // Changed "doctor" to "doctorName" to match what your frontend is sending
  doctorName: {
    type: String,
    required: true
  },
  // Changed "date" to "appointmentDate" to match frontend
  appointmentDate: {
    type: String,
    required: true
  },
  // Changed "time" to "appointmentTime" to match frontend
  appointmentTime: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);