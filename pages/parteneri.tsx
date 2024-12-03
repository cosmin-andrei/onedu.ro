import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/ParteneriPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import partnersData from '../src/app/data/parteneri.json'; 

const ParteneriPage = () => {
  return (
    <Layout>
      <div className={styles.doneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>🤝 Parteneri</h1>
            </div>
          </div>
        </section>

        {/* Secțiune Sponsori */}
        <section className={styles.sponsoriSection}>
          <h2 className={styles.sectionTitle}>Sponsori</h2>
          <div className={styles.sponsoriWrapper}>
            {partnersData.sponsori.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorCardLink}
              >
                <div className={styles.sponsorCard}>
                  <img src={sponsor.src} alt={sponsor.alt} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Secțiune Sponsori in-kind */}
        <section className={styles.sponsoriSection}>
          <h2 className={styles.sectionTitle}>Sponsori in-kind</h2>
          <div className={styles.sponsoriWrapper}>
            {partnersData.sponsoriInKind.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorCardLink}
              >
                <div className={styles.sponsorCard}>
                  <img src={sponsor.src} alt={sponsor.alt} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Secțiune Parteneri și prieteni #teamCOR */}
        <section className={styles.sponsoriSection}>
          <h2 className={styles.sectionTitle}>Parteneri și prieteni #teamCOR</h2>
          <div className={styles.sponsoriWrapper}>
            {partnersData.teamCOR.map((partner) => (
              <a
                key={partner.id}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorCardLink}
              >
                <div className={styles.sponsorCard}>
                  <img src={partner.src} alt={partner.alt} />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ParteneriPage;
