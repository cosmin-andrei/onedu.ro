"use client";

import React, { useState, ChangeEvent, FocusEvent } from 'react';
import { FaCreditCard, FaUniversity } from 'react-icons/fa';
import styles from './DonationForm.module.css';

const DonationForm = () => {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState('lunar');
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const [error, setError] = useState('');

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#16366d';
  };
  
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#d3d3d3';
  };
  
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setAmount(value);
    if (value < 10) {
      setError('Suma minimă pentru donație este de 10 lei.');
    } else {
      setError('');
    }
  };
  

  const handleDonationClick = () => {
    if (amount < 10) {
      setError('Suma minimă pentru donație este de 10 lei.');
      return;
    }
    // Restul logicii pentru donare
  };

  return (
    <div className={styles.donationFormContainer}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Suma donată (minim 10lei)</label>
        <div className={styles.amountInputWrapper}>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className={styles.amountInput}
            min="10"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <span className={styles.amountSuffix}>RON</span>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Frecvența donației</label>
        <div className={styles.frequencyOptions} role="group">
          <button
            className={`${styles.frequencyButton} ${frequency === 'lunar' ? styles.active : ''}`}
            onClick={() => setFrequency('lunar')}
          >
            <strong>lunar</strong>
          </button>
          <button
            className={`${styles.frequencyButton} ${frequency === 'o singura data' ? styles.active : ''}`}
            onClick={() => setFrequency('o singura data')}
          >
            <strong>o singura dată</strong>
          </button>
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Modalitate donație</label>
        <div className={styles.paymentMethods} role="group">
          <button
            className={`${styles.paymentButton} ${paymentMethod === 'Card' ? styles.active : ''}`}
            onClick={() => setPaymentMethod('Card')}
          >
            <div className={styles.paymentIconWrapper}>
              <FaCreditCard className={styles.paymentIcon} />
              <span>Card</span>
            </div>
          </button>
          <button
            className={`${styles.paymentButton} ${paymentMethod === 'Transfer' ? styles.active : ''}`}
            onClick={() => setPaymentMethod('Transfer')}
          >
            <div className={styles.paymentIconWrapper}>
              <FaUniversity className={styles.paymentIcon} />
              <span>Transfer</span>
            </div>
          </button>
        </div>
      </div>

      <button className={styles.donateButton} onClick={handleDonationClick}>
        Donează online
      </button>
  
    </div>
  );
};

export default DonationForm;
