import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/TransferPage.module.css';

const TransferPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Transfer bancar</h1>
            <p className={styles.heroSubtitle}>
              Investește lunar în educație printr-o donație recurentă online, de <a href="/doneaza">aici</a>.
            </p>
          </div>
        </section>

        {/* Restul conținutului */}
        <div className={styles.cardsWrapper}>
          {/* Informații bancare */}
          <div className={styles.paymentInfo}>
            <p className={styles.paymentTitle}>Beneficiar</p>
            <p className={styles.paymentDetail}>Asociația ONedu</p>
            
            <p className={styles.paymentTitle}>Cod fiscal</p>
            <p className={styles.paymentDetail}>49039313</p>
            
            <p className={styles.paymentTitle}>Banca</p>
            <p className={styles.paymentDetail}>Banca Transilvania</p>
            
            <p className={styles.paymentTitle}>IBAN (cont RON)</p>
            <p className={styles.paymentDetail}>RO49 BTRL RONC RT0C O956 3601</p>

            <p className={styles.paymentTitle}>IBAN (cont EUR)</p>
            <p className={styles.paymentDetail}> RO93 BTRL EURC RT0C O956 3601</p>

            <p className={styles.paymentTitle}>Detalii plată</p>
            <p className={styles.paymentDetail}> Menționează emailul tău la detaliile plății pentru a ne asigura că donația ta apare în contul tău de donator. 😊
          </p>
          </div>

          {/* Imaginea din dreapta */}
          <div className={styles.paymentCode}>
            <img
              src="/img/gvr-people.jpg" // Pune calea către imaginea dorită
              alt="Imagine Transfer Bancar"
              className={styles.paymentImage}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default TransferPage;
