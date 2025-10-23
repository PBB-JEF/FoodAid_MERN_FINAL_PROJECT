import Donation from '../models/donationModel.js';

export const createDonation = async (req, res) => {
  const { name, amount, message } = req.body;

  if (!name || !amount) {
    return res.status(400).json({ error: 'Name and amount are required' });
  }

  try {
    const donation = new Donation({ name, amount, message });
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create donation' });
  }
};

export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch donations' });
  }
};
