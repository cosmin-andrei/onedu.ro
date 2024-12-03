import React from 'react';
import Layout from '../src/app/layout';
import DonationForm from '../src/app/components/donation/DonationForm';
import styles from '../src/app/style/DoneazaPage.module.css';
import Carousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';


const DoneazaPage = () => {
  return (
    <Layout>
      <main className={styles.doneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>Modernizăm educația împreună.</h1>
              <p className={styles.heroSubtitle}>
            Anual părinții scot bani din buzunar pentru accesul elevilor din România la educație. 
            Ajută-ne să construim soluții digitale în educație și să renovăm împreună școli.</p>
            </div>
            <div>
              <DonationForm />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.carouselWrapper}>
                <Carousel className={`${styles.carousel} ${styles.carouselCustom}`} indicators={false}>
                  <Carousel.Item>
                    <Image width={500} height={300} 
                      className={`${styles.carouselImage} d-block w-100`}
                      src="/img/team-group/bkm_centru.jpg"
                      alt="bkm_centru"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image width={500} height={300} 
                      className={`${styles.carouselImage} d-block w-100`}
                      src="/img/team-group/tgmures_abc.jpg"
                      alt="tgmures_team"
                    />
                  </Carousel.Item>
                </Carousel>
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

        {/* Scoala ONedu Section */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Cum vor arăta Școlile ONedu?</h2>
                <p className={styles.aboutText}>
                  Spitalul pe care l-am construit la Marie Curie este funcțional. În noul Spital, construit cu sprijinul a peste 350.000 de donatori și 8.000 de sponsori, s-au mutat secțiile de oncologie, neurochirurgie, chirurgie și ATI din vechea clădire. Blocul operator cu 5 săli de operație este, de asemenea, funcțional. De la mutare, numărul pacienților din secția de oncologie s-a dublat.
                </p>
              </div>
              <div className={styles.carouselWrapper}>
                <Carousel className={`${styles.carousel} ${styles.carouselCustom}`} indicators={false}>
                  <Carousel.Item>
                    <Image width={500} height={300} 
                      className={`${styles.carouselImage} d-block w-100`}
                      src="/img/team/bkm_centru.jpg"
                      alt="Imagine 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image width={500} height={300} 
                      className={`${styles.carouselImage} d-block w-100`}
                      src="/img/team/tgmures_abc.jpg"
                      alt="Imagine 2"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Solutii digitale section */}
        <section className={styles.solutionsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Planul nostru pentru educație digitală
            </h2>
            <div className={styles.cardsWrapper}>
              <div className={styles.card2}>
                <Image width={500} height={300} src="/img/planul-nostru/aptitudini.webp" alt="aptitudini" />
                <h3>Aptitudini și abilități</h3>
                <p>Multe dintre abilitățile și cunoștințele tinerilor ce ies de pe băncile școlilor sunt desprinse din activități de voluntariat, youtube și social media. Școala, de cele mai multe ori, nu îi ajută în dezvoltarea aptitudinilor necesare în viața de adult.</p>
                <Link href="#">Află mai multe</Link>
              </div>
              <div className={styles.card2}>
                <Image width={500} height={300} src="/img/planul-nostru/management.png" alt="Management" />
                <h3>Management școlar</h3>
                <p>Administrarea școlilor în mod digital este primul pas într-o școală modernă și cu perspectivă de viitor. Miile de hârtii și comisii pe care o școală trebuie să le realizeze este un impas în păstrarea focusului pe dezvoltarea elevului.</p>
                <Link href="#">Află mai multe</Link>
              </div>
              <div className={styles.card2}>
                <Image width={500} height={300} src="/img/planul-nostru/online.png" alt="educatie in online" />
                <h3>Educație în online</h3>
                <p>Elevii au nevoie ca informația să fie atractivă și corect livrată. Sursele multiple din online pot contura cunoștințe greșite, astfel că este imperios necesar ca educația din online să fie aliniată la datele științifice.</p>
                <Link href="#">Află mai multe</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </Layout>
  );
};

export default DoneazaPage;
