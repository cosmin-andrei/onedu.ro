import React, { useState } from 'react';
import Layout from '../src/app/layout';
import data from '../src/app/data/produse.json'; 
import styles from '../src/app/style/MerchPage.module.css'; 
import Image from 'next/image';

const MerchPage = () => {
    // Extragem lista de produse din fișierul JSON
    const products = data.products;

    // Primul produs, care va fi folosit în secțiunea Hero
    const heroProduct = products[0];

    // Restul produselor, care vor fi afișate în secțiunea de casete
    const remainingProducts = products.slice(1);

    // State pentru filtrarea produselor
    const [filter, setFilter] = useState('Toate');

    // State pentru paginare
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // Funcție pentru filtrarea produselor
    const filteredProducts = remainingProducts.filter((product) => {
        if (filter === 'Toate') {
            return true;
        }
        return product.category === filter;
    });

    // Calculează indexul de început și sfârșit pentru paginare
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculează numărul total de pagini
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Funcția de click pentru a redirecționa către pagina unui produs specific
    const handleProductClick = (dest: string) => {
        window.location.href = '/produse/' + dest;
    };

    // Funcții pentru butoanele de navigare (Prev și Next)
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

    return (
        <Layout>
            {/* Secțiunea Hero - Primul Produs */}
            {heroProduct && (
                <section className={styles.heroSection}>
                    <div
                        className={styles.heroContentWrapper}
                        onClick={() => handleProductClick(heroProduct.id)}
                    >
                        <h1 className={styles.heroTitle}>{heroProduct.title}</h1>
                        <div className={styles.productDetails}>
                            <span className={styles.productCategory}>{heroProduct.category}</span>
                            <span className={styles.productPrice}>{heroProduct.price} RON</span>
                        </div>
                    </div>
                </section>
            )}

            {/* Secțiunea de Filtrare */}
            <section className={styles.filterSection}>
                <div className={styles.filterWrapper}>
                    {['Toate', 'Tricouri', 'Afișe', 'Accesorii'].map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ''}`}
                            onClick={() => {
                                setFilter(category);
                                setCurrentPage(1); // Resetăm la prima pagină după filtrare
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Secțiunea de Produse cu casete */}
            <section className={styles.storiesSection}>
                <div className={styles.container}>
                    <div className={styles.cardsWrapper}>
                        {currentProducts.map((product) => (
                            <div
                                key={product.id}
                                className={styles.card}
                                onClick={() => handleProductClick(product.id)}
                            >
                                <Image width={500} height={300} src={product.image} alt={product.title} />
                                <h3 className={styles.sectionTitle}>{product.title}</h3>
                                <div className={styles.productDetails}>
                                    <span className={styles.productCategory}>{product.category}</span>
                                    <span className={styles.productPrice}>{product.price} RON</span>
                                </div>
                                <button
                                    className={styles.buyButton}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.alert(`Ai adăugat ${product.title} în coș.`);
                                    }}
                                >
                                    Adaugă în coș
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Secțiunea de Navigare pentru paginare */}
                {filteredProducts.length > productsPerPage && (
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
        </Layout>
    );
};

export default MerchPage;
