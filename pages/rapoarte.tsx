import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/RapoartePage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


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
          <Link href="/rapoarte/activitate-2023" className={styles.cardLink}>Raport de Activitate 2023</Link>
          <p>Rapoarte financiare:</p>
          <ul>
            <li><Link href="/rapoarte/situatie-financiara-2023">Bilanț 2023</Link></li>
            <li><Link href="/rapoarte/consiliu-director-2023">Raport Consiliu Director 2023</Link></li>
          </ul>
        </div>
        <div className={styles.raportCard}>
          <h3>2019-2023</h3>
          <Link href="/rapoarte/activitate-2022" className={styles.cardLink}>Raport final Comunitatea ONedu România</Link>
        </div>
        <div className={styles.raportCard}>
          <h3>2022</h3>
          <Link href="/rapoarte/activitate-2022" className={styles.cardLink}>Raport de Activitate 2022</Link>
        </div>
        <div className={styles.raportCard}>
          <h3>2020</h3>
          <Link href="/rapoarte/activitate-2021" className={styles.cardLink}>Raport de Activitate 2020</Link>
        </div>
      </div>
    </section>


    <h1 className={styles.heroTextWrapper}>Transparență</h1>
    <section className={styles.raportSection}>
      <div className={styles.raportCardsWrapper}>
        <div className={styles.raportCard}>
          <h3>Organizare</h3>
            <Link href="/rapoarte/activitate-2020" className={styles.cardLink}>Statutul Asociației ONedu</Link>
            <p>Regulamente:</p>
            <ul>
              <li><Link href="/rapoarte/audit-2020">Regulamentul de Organizare și Funcționare</Link></li>
              <li><Link href="/rapoarte/audit-2020">Codul de etică și conduită</Link></li>
              <li><Link href="/rapoarte/audit-2020">Principiile și valorile Organizației</Link></li>
            </ul>
        </div>
        <div className={styles.raportCard}>
          <h3>Documente înființare</h3>
            <Link href="/rapoarte/activitate-2020" className={styles.cardLink}>Certificat fiscal</Link>
            <p>Regulamente:</p>
            <ul>
              <li><Link href="/rapoarte/audit-2020">Certificat fiscal TVA</Link></li>
              <li><Link href="/rapoarte/audit-2020">Hotărâre judecătorie</Link></li>
              <li><Link href="/rapoarte/audit-2020">Decizie registrul entităților</Link></li>
            </ul>
        </div>
        <div className={styles.raportCard}>
          <h3>Regulamente</h3>
            <ul>
              <li><Link href="/rapoarte/audit-2020">Regulament evenimente</Link></li>
              <li><Link href="/rapoarte/audit-2020">Gala Voluntariatului</Link></li>
              <li><Link href="/rapoarte/audit-2020">BikeMarathon Cluj-Napoca</Link></li>
              <li><Link href="/rapoarte/audit-2020">ROI Centrele iVoluntar </Link></li>
            </ul>
        </div>
        </div>
    </section>


      </div>
    </Layout>
  );
};

export default RapoartePage;
