import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/SMSPage.module.css';

const SmsPage = () => {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>#Noi am făcut Spitalul promis. Continuăm împreună?</h1>
            <p className={styles.heroDescription}>
              Construim primul Campus Medical Pediatric din România, la Marie Curie. Pentru că nu toți copiii care ajung aici au șansa să fie tratați în noul Spital. O parte din secții au rămas în vechea clădire. <strong>Donează lunar prin SMS</strong> pentru construcția Campusului Medical. Pentru ei, pentru copiii care ajung la spital, pentru părinții lor, pentru cadrele medicale.
            </p>
          </div>
          <div className={styles.smsInstructions}>
              <h2>Trimite <strong>SMS</strong> cu textul</h2>
              <br/>
              <div className={styles.smsOption}>
                <span className={styles.smsText}>EDUCATIE</span> la <span className={styles.smsNumber}>8844</span> pentru <span className={styles.smsPrice}>2€ lunar</span>
              </div>
            </div>
        </section>

        {/* Info Section */}
        <section className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Informații despre donația recurentă prin SMS</h2>
          <p className={styles.infoText}>
            Poți opri donația lunară cu mesajele „EDUCATIE STOP” la 8844.
          </p>
          <p className={styles.infoText}>
            Donația prin SMS poate fi făcută doar pe teritoriul României.
          </p>
          <p className={styles.infoText}>
            Valoarea donației prin SMS este de 2 euro pe lună. Pentru donațiile de pe abonament nu se percepe TVA. Pentru donațiile de pe cartelele preplătite, din rețelele Digi Mobil, Orange și Telekom România Mobile, TVA-ul a fost reținut la achiziționarea creditului. Pentru donațiile de pe cartelele preplătite în rețeaua Vodafone utilizatorii nu plătesc TVA. Campanie realizată cu sprijinul Digi Mobil, Orange România, Telekom România Mobile și Vodafone Romania.
          </p>
        </section>

      </main>
    </Layout>
  );
};

export default SmsPage;
