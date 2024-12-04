"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { FaUserCircle, FaShoppingCart, FaHeart, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [donateMenuOpen, setDonateMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li
            className={styles.navItem}
            onMouseEnter={() => setDonateMenuOpen(true)}
            onMouseLeave={() => setDonateMenuOpen(false)}
          >
            <span className={styles.navLink}>
              Donează <FaChevronDown className={styles.chevronIcon} />
            </span>
            {donateMenuOpen && (
              <ul
                className={styles.subMenuMinimal}
                onMouseEnter={() => setDonateMenuOpen(true)}
                onMouseLeave={() => setDonateMenuOpen(false)}
              >
                <li><Link href="/doneaza">Donează online</Link></li>
                <li><Link href="/transfer">Transfer bancar</Link></li>
                <li><Link href="/sms">SMS</Link></li>
                <li><Link href="/redirectioneaza">Redirecționează 3,5% </Link></li>
                <li><Link href="/campanii">Campania ta </Link></li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/plan" className={styles.navLink}>Planul nostru</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/scoala" className={styles.navLink}>Școala ONedu</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/sponsorizeaza" className={styles.navLink}>Sponsorizează 20%</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/merch" className={styles.navLink}>Merch</Link>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => setAboutMenuOpen(true)}
            onMouseLeave={() => setAboutMenuOpen(false)}
          >
            <span className={styles.navLink}>
              Despre noi <FaChevronDown className={styles.chevronIcon} />
            </span>
            {aboutMenuOpen && (
              <ul
                className={styles.subMenuMinimal}
                onMouseEnter={() => setAboutMenuOpen(true)}
                onMouseLeave={() => setAboutMenuOpen(false)}
              >
                <li><Link href="/despre">Despre noi</Link></li>
                <li><Link href="/proiecte">Proiecte</Link></li>
                <li><Link href="/premii">Premii</Link></li>
                <li><Link href="/rapoarte">Rapoarte</Link></li>
                <li><Link href="/parteneri">Susținători</Link></li>
              </ul>
            )}
          </li>
          <li className={styles.navItem}>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.actionsContainer}>
        <FaUserCircle className={styles.icon} />
        <FaShoppingCart className={styles.icon} />
        <Link href="/doneaza">
          <button className={styles.donateButton}><FaHeart className={styles.heartIcon} /> Donează</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
