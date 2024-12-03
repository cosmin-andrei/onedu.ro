import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/RapoartePage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const RapoartePage = () => {
  return (
    <Layout>
      <div className={styles.doneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>📂 Rapoarte și transparență</h1>
            </div>
          </div>
        </section>


        <section className={styles.raportSection}>
      <div className={styles.raportCardsWrapper}>
        <div className={styles.raportCard}>
          <h3>2023</h3>
          <a href="/rapoarte/activitate-2023" className={styles.cardLink}>Raport de Activitate 2023</a>
          <p>Rapoarte financiare:</p>
          <ul>
            <li><a href="/rapoarte/situatie-financiara-2023">Bilanț 2023</a></li>
            <li><a href="/rapoarte/consiliu-director-2023">Raport Consiliu Director 2023</a></li>
          </ul>
        </div>
        <div className={styles.raportCard}>
          <h3>2019-2023</h3>
          <a href="/rapoarte/activitate-2022" className={styles.cardLink}>Raport final Comunitatea ONedu România</a>
        </div>
        <div className={styles.raportCard}>
          <h3>2022</h3>
          <a href="/rapoarte/activitate-2022" className={styles.cardLink}>Raport de Activitate 2022</a>
        </div>
        <div className={styles.raportCard}>
          <h3>2020</h3>
          <a href="/rapoarte/activitate-2021" className={styles.cardLink}>Raport de Activitate 2020</a>
        </div>
      </div>
    </section>


    <h1 className={styles.heroTextWrapper}>Transparență</h1>
    <section className={styles.raportSection}>
      <div className={styles.raportCardsWrapper}>
        <div className={styles.raportCard}>
          <h3>Organizare</h3>
            <a href="/rapoarte/activitate-2020" className={styles.cardLink}>Statutul Asociației ONedu</a>
            <p>Regulamente:</p>
            <ul>
              <li><a href="/rapoarte/audit-2020">Regulamentul de Organizare și Funcționare</a></li>
              <li><a href="/rapoarte/audit-2020">Codul de etică și conduită</a></li>
              <li><a href="/rapoarte/audit-2020">Principiile și valorile Organizației</a></li>
            </ul>
        </div>
        <div className={styles.raportCard}>
          <h3>Documente înființare</h3>
            <a href="/rapoarte/activitate-2020" className={styles.cardLink}>Certificat fiscal</a>
            <p>Regulamente:</p>
            <ul>
              <li><a href="/rapoarte/audit-2020">Certificat fiscal TVA</a></li>
              <li><a href="/rapoarte/audit-2020">Hotărâre judecătorie</a></li>
              <li><a href="/rapoarte/audit-2020">Decizie registrul entităților</a></li>
            </ul>
        </div>
        <div className={styles.raportCard}>
          <h3>Regulamente</h3>
            <ul>
              <li><a href="/rapoarte/audit-2020">Regulament evenimente</a></li>
              <li><a href="/rapoarte/audit-2020">Gala Voluntariatului</a></li>
              <li><a href="/rapoarte/audit-2020">BikeMarathon Cluj-Napoca</a></li>
              <li><a href="/rapoarte/audit-2020">ROI Centrele iVoluntar </a></li>
            </ul>
        </div>
        </div>
    </section>


      </div>
    </Layout>
  );
};

export default RapoartePage;
