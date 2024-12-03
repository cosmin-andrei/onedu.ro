import React from 'react';
import Layout from '../src/app/layout';
import Image from 'next/image';
import styles from '../src/app/style/RedirectioneazaPage.module.css';
import Carousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';



const RedirectioneazaPage = () => {
  return (
    <Layout>
      <main className={styles.redirectioneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>Modernizăm educația împreună.</h1>
              <p className={styles.heroSubtitle}>
            Anual părinții scot bani din buzunar pentru accesul elevilor din România la educație. 
            Ajută-ne să construim soluții digitale în educație și să renovăm împreună școli.</p>
            </div>
            <div className={styles.heroCTA}>
            <h2>Pentru salariații în anul 2024</h2>
            <p>
              Redirecționează 3,5% din impozitul pe venit și ajută-ne să continuăm planul pornit pentru educația din România.
            </p>
            <button className={styles.ctaButton}>Completează formularul</button>
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

        {/* unde merge investitia Section */}
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

        <section className={styles.formSubmission}>
        <h2 className={styles.sectionTitle}>
            Vreau să completez și să depun singur Formularul 230
        </h2>
        <div className={styles.formGrid}>
            <div className={styles.formColumn}>
            <p>
                <strong>Formularul poate fi depus în persoană</strong> la sediul ANAF de care aparții cu domiciliul sau trimis prin curier sau prin poștă cu scrisoare recomandată.
            </p>
            <Link href="#" className={styles.link}>
                Vezi aici lista administrațiilor financiare
            </Link>
            <p>
                Descarcă formularul pre-completat cu datele Dăruiește Viață apăsând pe butonul de mai jos. <strong>Nu este nevoie să completezi și suma.</strong>
            </p>
            <button className={styles.downloadButton}>Descarcă formularul 230 pre-completat</button>
            </div>
            <div className={styles.formColumn}>
            <p>
                <strong>Formularul poate fi depus și online</strong> prin <Link href="#" className={styles.link}>SPV (Spațiul Privat Virtual)</Link> în cazul în care ai cont creat pe site-ul ANAF. Completează formularul inteligent cu datele personale și datele Asociației, bifează suma de 3,5%, validează-l și încarcă-l în SPV. Vei avea nevoie de aplicația <Link href="#" className={styles.link}>Adobe Reader</Link>.
            </p>
            <p>
                Datele fiscale pe care trebuie să le completezi pentru noi sunt: <strong>Asociația DĂRUIEȘTE VIAȚĂ</strong>, cod identificare fiscală: <strong>30563375</strong>, cont bancar: <strong>RO08 INGB 0000 9999 0317 5286</strong>.
            </p>
            <button className={styles.downloadButton}>Descarcă formularul inteligent</button>
            </div>
        </div>
        </section>

        {/* Detalii fiscale section*/}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.carouselWrapper}>
                <center>
                <Image width={500} height={300} 
                      className={`${styles.styleImage} d-block w-100`}
                      src="/img/team/bkm_centru.jpg"
                      alt="Imagine 1"
                    />
                </center>
              </div>
                <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Detalii fiscale</h2>
                <ul className={styles.aboutText}>
                    <li>Formularul 230 se completează de către persoanele fizice care realizează venituri din salarii. Procentul nu trebuie să depăşească plafonul de 3,5% din impozitul pe venit.</li>
                    <li> Nu pot redirecționa 3,5% din impozitul pe venit: PFA-urile, titularii de întreprinderi individuale și familiale și alții care obțin venituri din activități independente (profesii liberale), cei care obțin venituri din drepturi de autor și pensii, în general cei care puteau face redirecționarea prin completarea formularului 230 sau a rubricii specifice din Declarația Unică (formularul 212). Modificarea este conform OUG 115/2023.
                    </li>
                 </ul>
                </div>

            </div>
          </div>
        </section>


      </main>

    </Layout>
  );
};

export default RedirectioneazaPage;
