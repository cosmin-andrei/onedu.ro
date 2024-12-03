import React from 'react';
import Layout from '../src/app/layout';
import styles from '../src/app/style/ContactPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaRegNewspaper } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { AiFillBank } from "react-icons/ai";
import Link from 'next/link';

const ContactPage = () => {
  return (
    <Layout>
      <div className={styles.contactPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroTextWrapper}>
              <h1 className={styles.heroTitle}>📨 Contact</h1>
            </div>
          </div>
        </section>

        <section className={styles.contactInfoWrapper}>
      <div className={styles.contactItem}>
        <FiMail className={styles.contactIcon} />
        <div className={styles.contactText}>
          <span className={styles.contactLabel}>Scrie-ne la</span>
          <Link href="mailto:secretariat@onedu.ro" className={styles.contactInfo}>
            secretariat@onedu.ro
          </Link>
        </div>
      </div>

      <div className={styles.contactItem}>
        <FiPhone className={styles.contactIcon} />
        <div className={styles.contactText}>
          <span className={styles.contactLabel}>Sună-ne la</span>
          <Link href="tel:+40753491030" className={styles.contactInfo}>
            +40 753 491 030
          </Link>
        </div>
      </div>
    </section>

    <h3 className={styles.sectionTitle}>Alte informații de contact</h3>
    <section className={styles.contactInfoWrapper}>
      <div className={styles.contactItem}>
      <FaRegNewspaper className={styles.contactIcon} />
        <div className={styles.contactText}>
          <span className={styles.contactTitle}>Presă</span>
          <p className={styles.contactInfo2}>
            comunicare@onedu.ro
          </p>
        </div>
      </div>

      <div className={styles.contactItem}>
      <IoMdPeople className={styles.contactIcon} />
        <div className={styles.contactText}>
          <span className={styles.contactTitle}>Resurse umane</span>
          <p className={styles.contactInfo2}>
            hr@onedu.ro
          </p>
        </div>
      </div>

      <div className={styles.contactItem}>
      <AiFillBank className={styles.contactIcon} />
        <div className={styles.contactText}>
          <span className={styles.contactTitle}>Financiar</span>
          <p className={styles.contactInfo2}>
            financiar@onedu.ro
          </p>
        </div>
      </div>
      
    </section>


      </div>
    </Layout>
  );
};

export default ContactPage;
