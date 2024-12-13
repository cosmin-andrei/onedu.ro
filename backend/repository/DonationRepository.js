const fs = require('fs');
const path = require('path');
const Donation = require('../models/Donation');

const filePath = path.join(__dirname, '../data/donations.json');

class DonationRepository {
  constructor() {
    this.donations = this.loadDonations();
  }

  loadDonations() {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  }

  saveDonations() {
    fs.writeFileSync(filePath, JSON.stringify(this.donations, null, 2));
  }

  addDonation(donation) {
    this.donations.push(donation);
    this.saveDonations();
    return donation;
  }

  getDonationById(id) {
    return this.donations.find((donation) => donation.id === id);
  }

  getDonationsByUserId(userId) {
    return this.donations.filter((donation) => donation.idUser === userId);
  }

  getAllDonations() {
    return this.donations;
  }

  deleteDonation(id) {
    const index = this.donations.findIndex((donation) => donation.id === id);
    if (index === -1) return null;

    const deletedDonation = this.donations.splice(index, 1);
    this.saveDonations();
    return deletedDonation;
  }
}

module.exports = DonationRepository;
