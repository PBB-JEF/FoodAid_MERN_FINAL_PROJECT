import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Donation from './models/Donation.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is missing from .env file.');
  process.exit(1);
}

const sampleDonations = [
  {
    donorName: "Alice Mwangi",
    foodType: "Maize Flour",
    quantity: 20,
    location: "Nyeri",
    contact: "0712345678",
    status: "Pending"
  },
  {
    donorName: "Brian Otieno",
    foodType: "Rice",
    quantity: 15,
    location: "Kisumu",
    contact: "0723456789",
    status: "Collected"
  },
  {
    donorName: "Cynthia Wanjiru",
    foodType: "Beans",
    quantity: 10,
    location: "Nairobi",
    contact: "0734567890",
    status: "Delivered"
  },
  {
    donorName: "David Kimani",
    foodType: "Cooking Oil",
    quantity: 5,
    location: "Thika",
    contact: "0745678901",
    status: "Pending"
  },
  {
    donorName: "Esther Njeri",
    foodType: "Sugar",
    quantity: 8,
    location: "Mombasa",
    contact: "0756789012",
    status: "Collected"
  },
  {
    donorName: "Felix Kiptoo",
    foodType: "Milk",
    quantity: 12,
    location: "Eldoret",
    contact: "0767890123",
    status: "Pending"
  },
  {
    donorName: "Grace Achieng",
    foodType: "Bread",
    quantity: 25,
    location: "Kisii",
    contact: "0778901234",
    status: "Delivered"
  },
  {
    donorName: "Henry Muli",
    foodType: "Vegetables",
    quantity: 30,
    location: "Machakos",
    contact: "0789012345",
    status: "Pending"
  },
  {
    donorName: "Irene Cherono",
    foodType: "Canned Beans",
    quantity: 18,
    location: "Nakuru",
    contact: "0790123456",
    status: "Collected"
  },
  {
    donorName: "James Wekesa",
    foodType: "Unga wa Dola",
    quantity: 40,
    location: "Kitale",
    contact: "0701234567",
    status: "Pending"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    await Donation.deleteMany(); // Optional: clear existing data
    await Donation.insertMany(sampleDonations);
    console.log('✅ Sample donations inserted successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();

