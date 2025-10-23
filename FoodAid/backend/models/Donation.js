import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donorName: String,
  foodType: String,
  quantity: Number,
  location: String,
  contact: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Donation', donationSchema);
