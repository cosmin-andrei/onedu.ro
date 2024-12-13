"use client";

import { useState } from "react";
import styles from "./ContractPage.module.css";

const ContractPage = () => {
  const [showExitModal, setShowExitModal] = useState(false);

  return (
    <div className={styles.page}>
      {/* Header */}

      <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>Completează contractul online</h1>
            </div>
          </div>
        </section>

      <header className={styles.header}>
        <h1>Pasul 1/6: CUI Companie</h1>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Caută compania după CUI"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Caută</button>
        </div>
        <p className={styles.footerText}>
          Datele sunt cele publicate de Ministerul de Finanțe și ne sunt puse la
          dispoziție de <a href="https://openapi.ro">openapi.ro</a>.
        </p>
      </main>
    </div>
  );
};

export default ContractPage;
