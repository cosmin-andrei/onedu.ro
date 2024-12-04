import React, { useState } from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/PlanPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../src/app/data/solutii.json'; 
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';


const PlanPage = () => {

    const solutions = data.solutii;
    const [filter, setFilter] = useState('Toate');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 8;
  
    const [selectedSolution, setSelectedSolution] = useState<{ title: string; category:string; image: string; description: string; link: string; id: string; status: string } | null>(null); // Soluția selectată pentru popup
    const [showPopup, setShowPopup] = useState(false); 
  
    // Adaugăm primul element în lista proiectelor.
    const filteredSolutions = solutions.filter((solution) => {
        if (filter === 'Toate') {
          return true; // Afișează toate soluțiile
        }
        return solution.category === filter; // Compară categoria soluției cu filtrul activ
      });
      
  
    const indexOfLastSolution = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastSolution - projectsPerPage;
    const currentProjects = filteredSolutions.slice(indexOfFirstProject, indexOfLastSolution);
  
    const totalPages = Math.ceil(filteredSolutions.length / projectsPerPage);
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    // Deschide popup-ul
    const openPopup = (solution: any) => {
      setSelectedSolution(solution);
      setShowPopup(true);
    };
  
    // Închide popup-ul
    const closePopup = () => {
      setSelectedSolution(null);
      setShowPopup(false);
    };

  return (
    <Layout>
      <div className={styles.doneazaPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>Planul nostru pentru educația din România</h1>
            </div>
          </div>
          </section>
        </div>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.carouselWrapper}>
                    <Image
                      className={`${styles.styleImage} d-block w-100`}
                      src="/img/tedx_principalphoto.jpg"
                      alt="tedx2024"
                      width={500}
                      height={300}
                    />
              </div>
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Investitori în educație</h2>
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
              </div>
              <div className={styles.card}>
                <Image 
                  src="/img/about/scoli.jpg" 
                  alt="Scoli" 
                  width={500} 
                  height={300} 
                />
                <h3>Renovăm școli</h3>
                
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
            
              </div>
            </div>
          </div>
        </section>

          {/* Scoala ONedu Section */}
          <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Școala ONedu: <br/>școala secolului 21</h2>
                <p className={styles.aboutText}>
                  Spitalul pe care l-am construit la Marie Curie este funcțional. În noul Spital, construit cu sprijinul a peste 350.000 de donatori și 8.000 de sponsori, s-au mutat secțiile de oncologie, neurochirurgie, chirurgie și ATI din vechea clădire. Blocul operator cu 5 săli de operație este, de asemenea, funcțional. De la mutare, numărul pacienților din secția de oncologie s-a dublat.
                </p>
                <button className={styles.digitalizationButton} onClick={() => window.location.href = '/scoala'}>Vezi conceptul</button>
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

        {/* Secțiunea soluțiilor digitale */}
        <section className={styles.solutionsSection}>
          <h2 className={styles.sectionTitle}>Soluții digitale pentru educație</h2>

          <section className={styles.filterSection}>
            <div className={styles.filterWrapper}>
                {['Toate', 'Abilități și aptitudini', 'Management școlar', 'Educație în online'].map((category) => (
                <button
                    key={category}
                    className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ''}`}
                    onClick={() => {
                    setFilter(category); // Actualizează filtrul
                    setCurrentPage(1);  // Resetează la prima pagină
                    }}
                >
                    {category === 'Toate' ? 'Toate soluțiile' : category}
                </button>
                ))}
            </div>
            </section>


          <section className={styles.storiesSection2}>
            <div className={styles.container}>
              <div className={styles.cardsWrapper}>
                {currentProjects.map((solution) => (
                  <div key={solution.id}>
                    <div
                      className={styles.sponsorCard}
                      onClick={() => openPopup(solution)} // Deschide popup-ul la click
                    >
                      <Image width={500} height={300} src={solution.image} alt={solution.id} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paginare */}
            {filteredSolutions.length > projectsPerPage && (
              <div className={styles.paginationWrapper}>
                <button
                  className={styles.paginationButton}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  &laquo; Pagina anterioară
                </button>
                <span className={styles.paginationInfo}>
                  Pagina {currentPage} din {totalPages}
                </span>
                <button
                  className={styles.paginationButton}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Următoarea pagină &raquo;
                </button>
              </div>
            )}
          </section>
        </section>

   {/* Popup-ul pentru soluție */}
        {showPopup && selectedSolution && (
        <div className={styles.popupOverlay} onClick={closePopup}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.popupCloseButton} onClick={closePopup}>
                &times;
            </button>
            <div className={styles.popupContainer}>
                {/* Coloană stângă cu imaginea */}
                <div className={styles.popupImageWrapper}>
                <Image
                    width={150}
                    height={150}
                    src={selectedSolution.image}
                    alt={selectedSolution.id}
                    className={styles.popupImage}
                />
                </div>

                {/* Coloană dreaptă cu text și butoane */}
                <div className={styles.popupTextWrapper}>
                <div className={styles.popupHeader}>
                    <span
                    className={styles.statusDot}
                    style={{
                        backgroundColor:
                        selectedSolution.status === 'Soluție live'
                            ? 'green'
                            : selectedSolution.status === 'Soluție în lucru'
                            ? 'yellow'
                            : 'blue',
                    }}
                    ></span>
                    <span className={styles.statusText}>{selectedSolution.status}</span>
                </div>
                <h2 className={styles.popupTitle}>{selectedSolution.title}</h2>
                <p className={styles.popupDescription}>{selectedSolution.description}</p>
                <div className={styles.popupFooter}>
                    {selectedSolution.link ? (
                    <a href={selectedSolution.link} target="_blank" rel="noopener noreferrer">
                        <button className={styles.popupButton}>Vezi soluția &rarr;</button>
                    </a>
                    ) : (
                    <a href="/contact">
                        <button className={styles.popupButton}>Hai să o facem realitate</button>
                    </a>
                    )}
                </div>
                </div>
            </div>
            </div>
        </div>
        )}
         <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutContentWrapper}>
              <div className={styles.carouselWrapper}>
                    <Image
                      className={`${styles.styleImage} d-block w-100`}
                      src="/img/tedx_principalphoto.jpg"
                      alt="tedx2024"
                      width={500}
                      height={300}
                    />
              </div>
              <div className={styles.aboutTextWrapper}>
                <h2 className={styles.aboutTitle}>Centrul iVoluntar</h2>
                <p className={styles.aboutText}>
                Sistemul educațional este învechit și are nevoie de modernizare pe toate planurile: 
                digitalizare, planuri de învățământ, spații de învățare și multe altele. 
                Am fondat Comunitatea ONedu România, în 2019, din dorința de a digitaliza educația din școli 
                și licee. Am început pas cu pas și am considerat oportun să susținem și voluntariatul în comunitate,
                 mișcarea noastră pornind prin inițiativă civică. Alături de Cosmin și Denisa, fondatorii 
                 organizației, s-au alăturat sute de tineri din toată țară și străinătate. Hai și tu!</p>
                 <button className={styles.digitalizationButton} onClick={() => window.location.href = 'https://ivoluntar.org'}>Vezi activitatea</button>
              </div>
            </div>
          </div>
        </section>

    </Layout>
  );
};

export default PlanPage;
