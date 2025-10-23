import express from 'express';
import {
  createDonation,
  getDonations
} from '../controllers/donationController.js';

const router = express.Router();

// @route   POST /api/donations
// @desc    Create a new donation
// @access  Public
router.post('/', createDonation);

// @route   GET /api/donations
// @desc    Get all donations
// @access  Public
router.get('/', getDonations);

export default router;

