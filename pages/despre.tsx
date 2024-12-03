import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/DesprePage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';


const DesprePage = () => {
  return (
    <Layout>
      <div className={styles.doneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>Modernizăm educația împreună. Pas cu pas.</h1>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.carouselWrapper}>
                    <Image
                      className={`${styles.styleImage} d-block w-100`}
                      src="/img/team/tgmures_abc.jpg"
                      alt="tgmures_team"
                      width={500}
                      height={300}
                    />
              </div>
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Povestea noastră</h2>
                <p className={styles.aboutText}>
                Sistemul educațional este învechit și are nevoie de modernizare pe toate planurile: 
                digitalizare, planuri de învățământ, spații de învățare și multe altele. 
                Am fondat Comunitatea ONedu România, în 2019, din dorința de a digitaliza educația din școli 
                și licee. Am început pas cu pas și am considerat oportun să susținem și voluntariatul în comunitate,
                 mișcarea noastră pornind prin inițiativă civică. Alături de Cosmin și Denisa, fondatorii 
                 organizației, s-au alăturat sute de tineri din toată țară și străinătate. Hai și tu!</p>
              </div>
            </div>
          </div>
        </section>

         {/* Misiune */}
         <section className={styles.storiesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Ce facem pentru România</h2>
            <div className={styles.cardsWrapper}>
              <div className={styles.card}>
                <Image 
                  src="/img/about/educatie.jpg" 
                  alt="Educatie" 
                  width={500} 
                  height={300} 
                />
                <h3>Soluții digitale gratuite</h3>
                <p>Construim aplicații online pentru elevi, profesori, părinți, școli, tineri și organizații non-guvernamentale.</p>
                <Link href="/planul-nostru">Vezi planul nostru</Link>
              </div>
              <div className={styles.card}>
                <Image 
                  src="/img/about/scoli.jpg" 
                  alt="Scoli" 
                  width={500} 
                  height={300} 
                />
                <h3>Renovăm școli</h3>
                <p></p>
                <Link href="/scoala-onedu">Vezi conceptul Școala ONedu</Link>
              </div>
              <div className={styles.card}>
                <Image 
                  src="/img/about/youth.jpg" 
                  alt="Youth" 
                  width={500} 
                  height={300} 
                />
                <h3>Tineri și voluntariat</h3>
                <p>Construim programe și evenimente destinate acestora.</p>
                <a href="https://ivoluntar.org">Vezi Centrul iVoluntar</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.digitalizationSection}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Cum digitalizăm România?</h2>
            <div className={styles.stepsWrapper}>
            <div className={styles.step}>
                <span className={styles.stepNumber}>01</span>
                <h3 className={styles.stepTitle}>Aducem conștientizare</h3>
                <p className={styles.stepDescription}>
                Promovăm conceptele de educație digitală și management electronic în comunitate.
                </p>
            </div>
            <div className={styles.step}>
                <span className={styles.stepNumber}>02</span>
                <h3 className={styles.stepTitle}>Trasăm o hartă a soluțiilor digitale</h3>
                <p className={styles.stepDescription}>
                Gândim și planificăm atent soluțiile digitale ce acoperă nevoile din educație și tineret.
                </p>
            </div>
            <div className={styles.step}>
                <span className={styles.stepNumber}>03</span>
                <h3 className={styles.stepTitle}>Construim ecosisteme digitale</h3>
                <p className={styles.stepDescription}>
                Împreună acoperim nevoile comunității și digitalizăm România.
                </p>
            </div>
            </div>
        </div>
        </section>

        <section className={styles.teamSection}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Echipa Asociației ONedu</h2>
            <div className={styles.teamWrapper}>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/stefan.png" alt="Ștefan" width={500} height={300} />
                    <h3 className={styles.teamName}>Andrei-Ștefan Poenaru</h3>
                    <p className={styles.teamRole}>președinte</p>
                </div>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/crina.png" alt="Crina Rusu" width={500} height={300} />
                    <h3 className={styles.teamName}>Crina Rusu</h3>
                    <p className={styles.teamRole}>vicepreședinte</p>
                </div>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/mariana.png" alt="Mariana Uhren" width={500} height={300} />
                    <h3 className={styles.teamName}>Mariana Uhren</h3>
                    <p className={styles.teamRole}>secretar</p>
                </div>
            </div>

            <div className={styles.teamWrapper}>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/raly.png" alt="Raly" width={500} height={300} />
                    <h3 className={styles.teamName}>Raly Țonea</h3>
                    <p className={styles.teamRole}>director resurse umane</p>
                </div>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/claudiu.png" alt="Claudiu Chiorean" width={500} height={300} />
                    <h3 className={styles.teamName}>Claudiu Chiorean</h3>
                    <p className={styles.teamRole}>asistent manager</p>
                </div>

                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/darius.png" alt="Darius Bordeanu" width={500} height={300} />
                    <h3 className={styles.teamName}>Darius Bordeanu</h3>
                    <p className={styles.teamRole}>web developer</p>
                </div>
                
            </div>

            <div className={styles.teamWrapper}>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/florin.png" alt="Florin Baciu" width={500} height={300} />
                    <h3 className={styles.teamName}>Florin Baciu</h3>
                    <p className={styles.teamRole}>coordonator voluntari</p>
                    <p className={styles.teamProject}>TEDxAvram Iancu Street</p>
                </div>
                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/bianca.png" alt="Bianca Țuligă" width={500} height={300} />
                    <h3 className={styles.teamName}>Bianca Țuligă</h3>
                    <p className={styles.teamRole}>manager comunicare</p>
                    <p className={styles.teamProject}>TEDxAvram Iancu Street</p>
                </div>

                <div className={styles.teamMember}>
                    <Image className={styles.teamImage} src="/img/team/darius-merian.jpg" alt="Darius" width={500} height={300} />
                    <h3 className={styles.teamName}>Darius Merian</h3>
                    <p className={styles.teamRole}>manager comunicare</p>
                    <p className={styles.teamProject}>Gala Voluntariatului</p>
                </div>
            </div>

        </div>
        </section>

        <section className={styles.visionSection}>
          <div className={styles.container}>
            <h2 className={styles.visionTitle}>Credem în transparența faptelor bune</h2>
            <p className={styles.visionText}>
                Publicăm anual rapoarte de activitate și financiare pentru a-ți arăta cum folosim investiția ta în educație.<br/>
                Funcționăm în baza Statutului și a regulamentelor interne, disponibile în secțiunea de transparență.
            </p>
            <button className={styles.digitalizationButton} onClick={() => window.location.href = '/rapoarte'}>Vezi rapoartele noastre</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DesprePage;
