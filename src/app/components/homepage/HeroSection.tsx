import React from 'react';
import styles from './HeroSection.module.css';
import DonationForm from '../donation/DonationForm';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>#Noi am făcut Spitalul Promis. Continuăm împreună?</h1>
        <p>Donează pentru extinderea Spitalului pentru copii construit la Marie Curie într-un Campus Medical Pediatric și vei putea scrie o promisiune către tine din viitor.</p>
      </div>
      <div className={styles.donationFormWrapper}>
        <DonationForm />
      </div>
    </section>
  );
};

export default HeroSection;
