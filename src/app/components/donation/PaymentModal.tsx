import React, { useState, useEffect } from 'react';
import styles from './PaymentModal.module.css';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  frequency: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, frequency }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Setăm automat starea checkbox-ului la true când modalul devine vizibil
  useEffect(() => {
    if (isOpen) {
      setIsSubscribed(true);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    onClose();
  };
  
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.paymentDetails}>
          <div className={styles.investmentDetails}>
            <h3>Donația ta</h3>
            <p>
              Donație: {amount} RON{frequency === 'lunar' ? ' / lună' : ''}
            </p>
            <small>Donațiile cu cardul procesate prin SmartFintech.</small>
          </div>
          <div className={styles.formDetails}>
            <h3>Detalii donație</h3>
            <form>
              <div className={styles.inlineFields}>
                <div className={styles.inputGroup}>
                  <label>Prenume</label>
                  <input type="text" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Nume</label>
                  <input type="text" required />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefon (opțional)</label>
                <input type="tel" />
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="subscribe"
                  checked={isSubscribed}
                  onChange={() => setIsSubscribed(!isSubscribed)}
                />
                <label htmlFor="subscribe" className={styles.checkboxLabel}>
                  Da, îmi pasă și doresc să primesc vești pe email despre proiectele Asociației ONedu.
                </label>
              </div>
              <button type="submit" className={styles.payButton}>
                Donează acum
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
