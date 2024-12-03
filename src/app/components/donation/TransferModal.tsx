import React from 'react';
import styles from './TransferModal.module.css'; // Importăm stilurile noi

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

const TransferModal: React.FC<TransferModalProps> = ({ isOpen, onClose, amount }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Închide modalul dacă se face click pe fundal
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Previne propagarea clickului spre fundal
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.paymentDetails}>
          {/* Secțiunea din stânga: pătrat albastru și text discret */}
          <div className={styles.leftSection}>
            <div className={styles.investmentDetails}>
              <h3>Donația ta</h3>
              <p>
                Donație: <strong>{amount} RON</strong>
              </p>
            </div>
            <p className={styles.note}>
              Menționează emailul tău la detaliile plății pentru a ne asigura că donația ta apare în contul tău de donator. 😊
            </p>
          </div>

          {/* Secțiunea din dreapta: Detalii transfer */}
          <div className={styles.formDetails}>
          <div className={styles.bankDetails}>
              <p className={styles.label}><strong>Beneficiar:</strong> Asociația ONedu</p>
              <p className={styles.label}><strong>Cod fiscal:</strong> 49039313</p>
              <p className={styles.label}><strong>Banca:</strong> Banca Transilvania</p>
              <p className={styles.label}><strong>IBAN (Cont RON):</strong> RO49 BTRL RONC RT0C O956 3601</p>
              <p className={styles.label}><strong>IBAN (Cont EURO):</strong> RO93 BTRL EURC RT0C O956 3601</p>
            </div>
            <button className={styles.confirmButton} onClick={onClose}>
              Am înțeles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
