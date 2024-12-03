import React, { useState, useEffect, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Layout from '../src/app/layout'; // Layout global
import judeteData from '../src/data/judete.json'; // Importăm JSON-ul cu județe și orașe
import styles from '../src/app/style/Formular230Page.module.css'; // Stiluri pentru pagină

// Interfața pentru JSON
interface Localitate {
  nume: string;
  simplu?: string;
}

interface Judet {
  auto: string;
  nume: string;
  localitati: Localitate[];
}

const Formular230Page: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2'); // Perioada preselectată
  const [selectedCounty, setSelectedCounty] = useState(''); // Județ selectat
  const [cities, setCities] = useState<string[]>([]); // Orașe disponibile
  const [selectedCity, setSelectedCity] = useState(''); // Oraș selectat
  const [selectedSignature, setSelectedSignature] = useState('suggested');
  const [isDrawing, setIsDrawing] = useState(false); // Controlăm afișarea secțiunii de desenat
  const sigCanvas = useRef<SignatureCanvas>(null); // Referință pentru canvas-ul de desen
  const [isAgreed, setIsAgreed] = useState(true); // Pentru checkbox-ul preselectat
  const [isSubscribed, setIsSubscribed] = useState(false); // Pentru opțiunea de abonare

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedSignature === 'manual' && sigCanvas.current) {
      const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
      console.log('Semnătura desenată:', signatureImage);
      // Poți trimite semnătura către backend
    }

    console.log('Formular trimis!', { isSubscribed });
  };

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  // Extragem lista județelor din JSON
  const judete: Judet[] = (judeteData as { judete: Judet[] }).judete;

  // Actualizăm lista orașelor pe baza județului selectat
  useEffect(() => {
    if (selectedCounty) {
      const judet = judete.find((j) => j.nume === selectedCounty);
      if (judet) {
        const sortedCities = judet.localitati.map((loc) => loc.nume).sort((a, b) => a.localeCompare(b));
        setCities(sortedCities);
      } else {
        setCities([]);
      }
      setSelectedCity('');
    } else {
      setCities([]);
    }
  }, [selectedCounty]);
  

  return (
    <Layout>
      <div className={styles.page}>
        {/* Secțiunea introductivă */}
        <header className={styles.header}>
          <h1 className={styles.title}>Redirecționează 3,5%</h1>
          <p className={styles.description}>
            Completează formularul de mai jos cu datele tale personale și semnează-l până la <strong>25 mai 2025</strong>.
          </p>
        </header>

        {/* Formularul */}
        <form className={styles.form}>
          {/* Secțiunea: Perioada redirecționării */}
          <div className={styles.selectionContainer}>
            <p className={styles.legend}>
              Pentru ce perioadă dorești să redirecționezi? <span className={styles.required}>*</span>
            </p>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={`${styles.selectionButton} ${selectedPeriod === '1' ? styles.active : ''}`}
                onClick={() => setSelectedPeriod('1')}
              >
                1 an
              </button>
              <button
                type="button"
                className={`${styles.selectionButton} ${selectedPeriod === '2' ? styles.active : ''}`}
                onClick={() => setSelectedPeriod('2')}
              >
                2 ani
              </button>
            </div>
          </div>

          {/* Secțiunea: Date personale */}
          <section className={styles.section}>
            <h2 className={styles.subtitle}>Date personale</h2>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="lastName">
                  Nume de familie <span className={styles.required}>*</span>
                </label>
                <input id="lastName" type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">
                  Prenume <span className={styles.required}>*</span>
                </label>
                <input id="firstName" type="text" required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">
                  Email <span className={styles.required}>*</span>
                </label>
                <input id="email" type="email" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Telefon (opțional)</label>
                <input id="phone" type="tel" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroupFull}>
                <label htmlFor="cnp">
                  Cod Numeric Personal (CNP) <span className={styles.required}>*</span>
                </label>
                <input id="cnp" type="text" required />
              </div>
            </div>
          </section>

          {/* Secțiunea: Adresă de domiciliu */}
          <section className={styles.section}>
            <h2 className={styles.subtitle}>Adresă de domiciliu</h2>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="street">
                  Stradă <span className={styles.required}>*</span>
                </label>
                <input id="street" type="text" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="number">
                  Număr <span className={styles.required}>*</span>
                </label>
                <input id="number" type="text" required />
              </div>
            </div>

            <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="block">Bloc</label>
              <input id="block" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="staircase">Scară</label>
              <input id="staircase" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="floor">Etaj</label>
              <input id="floor" type="text" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="apartment">Ap.</label>
              <input id="apartment" type="text" />
            </div>
          </div>


            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="county">
                  Județ <span className={styles.required}>*</span>
                </label>
                <select
                  id="county"
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  required
                >
                  <option value="">Alege județ...</option>
                  {judete.map((judet) => (
                    <option key={judet.auto} value={judet.nume}>
                      {judet.nume}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="city">
                  Oraș <span className={styles.required}>*</span>
                </label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  required
                  disabled={!cities.length}
                >
                  <option value="">Alege oraș...</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Secțiunea: Semnătură */}
          <section className={styles.section}>
            <h2 className={styles.subtitle}>Semnătură</h2>
            <p className={styles.legend}>Alege cum dorești să semnezi:</p>
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={`${styles.selectionButton} ${selectedSignature === 'suggested' ? styles.active : ''}`}
                onClick={() => {
                  setSelectedSignature('suggested');
                  setIsDrawing(false); // Ascundem secțiunea de desenat
                }}
              >
                Semnez utilizând sugestia (numele și prenumele meu)
              </button>
              <button
                type="button"
                className={`${styles.selectionButton} ${selectedSignature === 'manual' ? styles.active : ''}`}
                onClick={() => {
                  setSelectedSignature('manual');
                  setIsDrawing(true); // Afișăm secțiunea de desenat
                }}
              >
                Doresc să semnez folosind mouse-ul sau degetul
              </button>
            </div>

            {/* Secțiunea de desenat */}
            {isDrawing && (
              <div className={styles.signaturePad}>
                <SignatureCanvas
                  ref={sigCanvas}
                  penColor="black"
                  canvasProps={{
                    width: 500,
                    height: 200,
                    className: styles.signatureCanvas,
                  }}
                />
                <button type="button" className={styles.clearButton} onClick={clearSignature}>
                  Șterge semnătura
                </button>
              </div>
            )}
          </section>


             {/* Secțiunea: Termeni și condiții */}
          <section className={styles.section}>
            <div className={styles.termsCard}>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label htmlFor="terms">
                  Sunt de acord cu <a href="/termeni" target="_blank" rel="noopener noreferrer">Termenii</a> și{' '}
                  <a href="/confidentialitate" target="_blank" rel="noopener noreferrer">Politica de Confidențialitate</a>
                </label>
              </div>
            </div>
          </section>

          {/* Secțiunea: Newsletter */}
          <section className={styles.section}>
            <div className={styles.termsCard}>
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={isSubscribed}
                  onChange={(e) => setIsSubscribed(e.target.checked)}
                />
                <label htmlFor="newsletter">
                  Da, îmi pasă și doresc să primesc vești pe email despre proiectele Asociației ONedu.
                </label>
              </div>
            </div>
          </section>

          {/* Butonul de trimitere */}
          <button type="submit" className={styles.submitButton}>
            Trimite Formularul
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Formular230Page;
