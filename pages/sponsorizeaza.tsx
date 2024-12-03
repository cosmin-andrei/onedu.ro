import React, { useState } from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/SponsorizeazaPage.module.css';
import Carousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import '../src/app/components/calculator';

const SponsorizeazaPage = () => {
  // State pentru calculator
  const [profit, setProfit] = useState(0);
  const [sumaSponsorizata, setSumaSponsorizata] = useState(0);
  const sumaDonare = Math.max(0, 0.20 * (profit * 0.16) - sumaSponsorizata);

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#16366d';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#d3d3d3';
  };

  return (
    <Layout>
      <main className={styles.sponsorizeazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Modernizăm educația împreună.</h1>
              <p className={styles.heroSubtitle}>
                  Construim un hub de servicii digitale în educație pentru elevi, profesori, școli și părinți.
                  Modernizăm școlile din România. Ajută-ne să parcurgem harta spre o Românie digitală și modernă.
              </p>

              <div className={styles.cardContainer}>
                  <div className={styles.heroCard}>
                      <div className={styles.heroCardTop}>
                          <h2 className={styles.cardTitle}>Anul 2024</h2>
                          <p className={styles.cardText}>
                              Completează contractul și investește în educația din România în doar 5 minute. Vei primi toate detaliile despre investiția ta după completarea contractului.
                          </p>
                      </div>
                      <div className={styles.heroCardBottom}>
                          <Link href="/contract-2024" className={styles.cardButton}>Completează contractul</Link>
                          <div className={styles.cardLinks}>
                              <Link href="/model-de-contract" className={styles.cardLink}>Model de contract</Link>
                              <Link href="/informatii-suplimentare" className={styles.cardLink}>Informații suplimentare</Link>
                          </div>
                      </div>
                  </div>

                  <div className={styles.heroCard}>
                      <div className={styles.heroCardTop}>
                          <h2 className={styles.cardTitle}>Anul 2023</h2>
                          <p className={styles.cardText}>
                              Dacă sponsorizările făcute în 2023 nu au atins plafonul maxim stabilit de lege, completează contractul
                              cu suma rămasă și depune la ANAF Declarația 177 până la 25 decembrie.
                          </p>
                      </div>
                      <div className={styles.heroCardBottom}>
                          <Link href="/contract-2023" className={styles.cardButton}>Completează contractul</Link>
                          <div className={styles.cardLinks}>
                              <Link href="/model-de-contract" className={styles.cardLink}>Model de contract</Link>
                              <Link href="/informatii-suplimentare" className={styles.cardLink}>Informații suplimentare</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.carouselWrapper}>
                <center>
                <Carousel className={`${styles.carousel} ${styles.carouselCustom}`} indicators={false}>
                  <Carousel.Item>
                    <Image width={500} height={300} 
                      className={`${styles.carouselImage} d-block w-100`}
                      src="/img/team/bkm_centru.jpg"
                      alt="bkm_centru"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image width={500} height={300} 
                      className={`${styles.carouselImage} d-block w-100`}
                      src="/img/team/tgmures_abc.jpg"
                      alt="tgmures_team"
                    />
                  </Carousel.Item>
                </Carousel>
                </center>
              </div>
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Manifestul nostru</h2>
                <p className={styles.aboutText}>
                Am pornit ca o mișcare civică în 2019 la inițiativa a doi elevi gălățeni, din dorința de a digitaliza educația din România. 
                Din 2025 modernizăm educația pe toate planurile: infrastructură, resurse materiale și resurse digitale.
                Construim împreună soluții digitale pentru elevi, părinți, tineri, profesori, școli și modernizăm școlile României.<br/><br/> Construim România educată.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Povestile elevilor */}
        <section className={styles.storiesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Poveștile elevilor din România</h2>
            <div className={styles.cardsWrapper}>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/stories/iulia.jpg" alt="Iulia" />
                <h3>Iulia, clasa a XII-a</h3>
                <p>Iulia ne spune că nu știe ce facultate să aleagă, având nevoie de orientare în carieră.</p>
                <Link href="#">Citește povestea ei</Link>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/stories/maya.jpg" alt="Maya" />
                <h3>Maya, clasa a X-a</h3>
                <p>Maya ne povestește cât de dificil îi este să găsească informații educaționale corecte pe internet.</p>
                <Link href="#">Citește povestea ei</Link>
              </div>
              <div className={styles.card}>
                <Image width={500} height={300} src="/img/stories/stefan.jpg" alt="Stefan" />
                <h3>Ștefan, fost elev</h3>
                <p>Ștefan visează să construiască pentru educația elevilor din România, investind în educație din 2021.</p>
                <Link href="#">Citește povestea lui</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Unde merge investiția Section */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Unde merge investiția ta?</h2>
                <p className={styles.aboutText}>
                  Spitalul pe care l-am construit la Marie Curie este funcțional. În noul Spital, construit cu sprijinul a peste 350.000 de donatori și 8.000 de sponsori, s-au mutat secțiile de oncologie, neurochirurgie, chirurgie și ATI din vechea clădire. Blocul operator cu 5 săli de operație este, de asemenea, funcțional. De la mutare, numărul pacienților din secția de oncologie s-a dublat.
                </p>
              </div>
              <div className={styles.carouselWrapper}>
                <center>
                    <Image width={500} height={300} 
                      className={`${styles.styleImage} d-block w-100`}
                      src="/img/team/bkm_centru.jpg"
                      alt="Imagine 1"
                    />
                </center>
              </div>
            </div>
          </div>
        </section>

      <section className={styles.sponsorizeazaSection}>
        <h2 className={styles.sectionTitle}>Află cât poate dona firma ta pentru educație</h2>
        <p className={styles.sectionSubtitle}>
         Modernizăm educația din România <strong>împreună</strong>.
        </p>
        <div className={styles.calculator}>
           <div className={styles.inputGroup}>
              <label className={styles.label}>Profit brut</label>
              <div className={styles.amountInputWrapper}>
              <input
                type="number"
                min="0"
                id="profit"
                className={styles.amountInput}
                value={profit}
                placeholder="Introduceți profitul brut"
                onChange={(e) => setProfit(parseFloat(e.target.value) || 0)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />

               <span className={styles.amountSuffix}>RON</span>
               </div>
            
              <label className={styles.label}>Suma sponsorizată în anul 2024</label>
              <div className={styles.amountInputWrapper}>
                <input
                type="number"
                className={styles.amountInput}
                id="suma-sponsorizata"
                value={sumaSponsorizata}
                min="0"
                placeholder="Introduceți suma sponsorizată"
                onChange={(e) => setSumaSponsorizata(parseFloat(e.target.value) || 0)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
               <span className={styles.amountSuffix}>RON</span>
              </div>
          </div>

          {/* Partea dreaptă cu rezultatul calculat */}
          <div className={styles.calculatorResult}>
            <span className={styles.resultText}>{sumaDonare.toFixed(2)} RON</span>
            <span className={styles.sectionSubtitle}>20% din impozitul pe profit</span>
          </div>
        </div>

        <Link href="/contract" className={styles.cardButton2}>Completează contractul acum</Link>

      </section>


      </main>
    </Layout>
  );
};

export default SponsorizeazaPage;
