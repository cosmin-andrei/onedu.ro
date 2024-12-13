'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {  
  
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne reîncărcarea paginii
    try {
      const response = await fetch("http://localhost:3000/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies, dacă sunt necesare
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe to newsletter");
      }

      const data = await response.json();
      console.log("Successfully subscribed:", data);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.columnSmall}>
          <h3 className={styles.columnHeading}>Donează</h3>
          <ul className={styles.columnList}>
            <li><Link href="/doneaza">Donează online</Link></li>
            <li><Link href="/transfer">Transfer bancar</Link></li>
            <li><Link href="/redirectioneaza">Redirecționează 3.5%</Link></li>
            <li><Link href="/sms">Donează SMS</Link></li>
          </ul>
        </div>
        <div className={styles.columnSmall}>
          <h3 className={styles.columnHeading}>Planul nostru</h3>
          <ul className={styles.columnList}>
            <li><Link href="/abilitati-aptitudini">Abilități și aptitudini</Link></li>
            <li><Link href="/management-scolar">Management școlar</Link></li>
            <li><Link href="/educatie-online">Educație în online</Link></li>
            <li><Link href="https://ivoluntar.org">Centrul iVoluntar</Link></li>
          </ul>
        </div>
        <div className={styles.columnSmall}>
          <h3 className={styles.columnHeading}>Organizație</h3>
          <ul className={styles.columnList}>
            <li><Link href="/despre">Despre noi</Link></li>
            <li><Link href="/proiecte">Proiecte</Link></li>
            <li><Link href="/rapoarte">Rapoarte</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className={styles.columnLarge}>
          <h3 className={styles.columnHeading}>Abonează-te</h3>
          <form className={styles.newsletterFormInline} onSubmit={handleSubmit}>
            <div className={styles.inlineFields}>
              <input
                type="text"
                name="firstName"
                placeholder="Prenume"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.inputFieldInlineShortLargePadding}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{ marginLeft: "0.5rem" }}
                className={styles.inputFieldInlineShortLargePadding}
              />
            </div>
            <button type="submit" className={styles.subscribeButtonInline}>
              Rămâi la curent
            </button>
            {isSubmitted && <p>Mulțumim pentru înscriere!</p>}
            {error && <p style={{ color: "red" }}>Eroare: {error}</p>}
          </form>
          <div className={styles.socialIconsTop}>
            <Link href="https://facebook.com/ONeduRomania" className={styles.socialIconTop}><FaFacebook /></Link>
            <Link href="https://instagram.com/onedu.romania" className={styles.socialIconTop}><FaInstagram /></Link>
            <Link href="https://tiktok.com/@onedu.ro" className={styles.socialIconTop}><FaTiktok /></Link>
            <Link href="https://linkedin.com/company/onedu" className={styles.socialIconTop}><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.logoSectionBottom}>
          <div className={styles.logoContainerBottom}>
            <img src="/logo-white.png" alt="Logo" className={styles.logoLarge} />
            <div className={styles.legalLinksBottom}>
              <Link href="/privacy">Confidențialitate</Link>
              <Link href="/terms">Termeni</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className={styles.digitalPartnerSectionBottom}>
          <span className={styles.partnerText}>Partener digitalizare</span>
          <Link href="https://web365.ro" target="_blank">
            <img src="/web365-logo.png" alt="Web365 Logo" className={styles.partnerLogo} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;