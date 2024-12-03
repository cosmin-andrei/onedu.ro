import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/PremiiPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const PremiiPage = () => {
  return (
    <Layout>
      <div className={styles.doneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>🏆 Premii</h1>
            </div>
          </div>
        </section>

         {/* Premii */}
         <section className={styles.storiesSection}>
          <div className={styles.container}>
            <div className={styles.cardsWrapper}>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/premii/codeweek.png" alt="codeweek" />
                <h3>Certificat CodeWeek EU</h3><p>10.11.2021</p>
                <p>Comunitatea ONedu România primește aprecierea Comisiei Europene pentru activitatea sa în promovarea educației digitale din cadrul Săptămânii Europene de Codare.</p>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/premii/lit-digit.png" alt="certificat literatie digit" />
                <h3>Certificat de Excelență în Literație Digitală</h3>
                <p>10.11.2021</p>
                <p>Comunitatea ONedu România primește aprecierea directorului Comisiei Europene pentru activitatea sa din Săptămâna EU de codare.</p>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/premii/cnv2021.png" alt="SNV2021" />
                <h3>Certificat - Săptămâna Națională a Voluntariatului</h3>
                <p>10.05.2021</p>
                <p>Comunitatea ONedu România primește aprecierea Pro Vobis pentru primul raport din România privind implementarea Legii Voluntariatului.</p>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/premii/cnv2020.png" alt="SNV2020" />
                <h3>Certificat - Săptămâna Națională a Voluntariatului</h3>
                <p>13.09.2020</p>
                <p>Comunitatea ONedu România primește aprecierea Pro Vobis pentru primul târg de voluntariat online din România, de la debutul pandemiei.</p>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/premii/gala-galati.jpeg" alt="Gala Galati" />
                <h3>Premiul special - Gala Comunității Gălățene</h3>
                <p>03.12.2019</p>
                <p>Cosmin, fondatorul Comunității ONedu România, a primit o distincție în cadrul Galei Comunității Gălățene, ca urmare a activității sale în comunitate.</p>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/premii/gala-nemo.jpeg" alt="Gala Nemo" />
                <h3>Premiul Maria Margareta Salvanu</h3>
                <p>29.11.2019</p>
                <p>Cosmin, fondatorul Comunității ONedu România, a primit o distincție în cadrul Galei Caritabile Nemo, secțiunea Leaderul care schimbă lumea.</p>
              </div>
            </div>
          </div>
        </section>

        


      </div>
    </Layout>
  );
};

export default PremiiPage;
