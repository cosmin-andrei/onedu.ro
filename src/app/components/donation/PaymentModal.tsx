"use client";
import React from 'react';
import styles from './PaymentModal.module.css';



const PaymentModal = ({ isOpen, onClose, amount, frequency }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.paymentDetails}>
          <div className={styles.investmentDetails}>
            <h3>Abonament la fericire</h3>
            <p>Investiție: {amount} RON{frequency === 'lunar' ? ' / lună' : ''}</p>
            <small>Plăți cu cardul procesate prin SmartFintech</small>
          </div>
          <div className={styles.formDetails}>
            <h3>Detalii plată</h3>
            <form>
              <div className={styles.inputGroup}>
                <label>Prenume *</label>
                <input type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Nume *</label>
                <input type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Email *</label>
                <input type="email" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefon (opțional)</label>
                <input type="tel" />
              </div>
              <button type="submit" className={styles.payButton}>
                Plătește acum {amount} RON
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
