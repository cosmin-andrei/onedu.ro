const UserRepository = require('../repository/UserRepository');
const DonationRepository = require('../repository/DonationRepository');
const axios = require('axios');

class AppService {
  constructor() {
    this.userRepo = new UserRepository();
    this.donationRepo = new DonationRepository();
  }

#addUser(userData) {
    if (!userData.first_name || !userData.email) {
      throw new Error('First name and email are required.');
    }

    const id = this.userRepo.getAllUsers().length + 1;
    const newUser = { id, ...userData };
    return this.userRepo.addUser(newUser);
  }

  addDonation(donationData) {
    const { first_name, last_name, email, phone, amount, frequency } = donationData;

    if (!first_name || !last_name || !email || !phone || !amount || amount <= 0 || !frequency) {
      throw new Error('Completează toate câmpurile obligatorii.');
    }

    let user = this.userRepo.getUserByEmail(donationData.email);
    if (!user) {
      this.#addUser({ first_name: donationData.first_name, last_name: donationData.last_name, email: donationData.email, phone: donationData.phone });
    }

    const id = this.donationRepo.getAllDonations().length + 1;
    const newDonation = { id, ...donationData, date: new Date() };

    

    return this.donationRepo.addDonation(newDonation);
  }

  subscribeToNewsletter(newsletterData) {
    // Validare pentru email
    if (!newsletterData.email || newsletterData.email.trim() === '' || 
        !newsletterData.email.includes('@') || !newsletterData.email.includes('.')) {
      throw new Error('Email-ul este obligatoriu și trebuie să fie valid.');
    }
  
    // Validare pentru prenume
    if (!newsletterData.first_name || newsletterData.first_name.trim() === '') {
      throw new Error('Prenumele este obligatoriu.');
    }
  
    // ID-ul formularului
    const formId = 'c643ce2102'; // Confirmă că acest ID este valid în ConvertKit
  
    // Cheia secretă
    const secretKey = 'glDdtNacy4MHSezrpNLn3dm7jjHWLSuoZN_CzbkcXks'; // Confirmă că aceasta este cheia privată corectă
  
    // Structura cererii
    const subscribeData = {
      email: newsletterData.email,
      first_name: newsletterData.first_name,
      tags: ['onedu.ro'], // Lista de tag-uri
    };
  
    // Endpoint-ul pentru formular, incluzând cheia secretă
    const endpoint = `https://api.convertkit.com/v3/forms/${formId}/subscribe?api_secret=${secretKey}`;
  
    // Trimite cererea
    return axios.post(endpoint, subscribeData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Răspuns de la ConvertKit:', response.data);
        return response.data; // Răspunsul ConvertKit la cerere
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        console.error('Eroare la abonare:', error.response?.data || error.message);
        throw new Error('Eroare la abonare: ' + errorMessage);
      });
  }
  
  
  
  
}

module.exports = AppService;
