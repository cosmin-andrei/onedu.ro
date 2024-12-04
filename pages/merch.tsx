import React, { useState } from 'react';
import Layout from '../src/app/layout';
import data from '../src/app/data/produse.json'; 
import styles from '../src/app/style/MerchPage.module.css'; 
import Image from 'next/image';

const MerchPage = () => {
    // Extragem lista de produse din fișierul JSON
    const products = data.products;

    // State pentru filtrare și paginare
    const [filter, setFilter] = useState('Toate');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    // State pentru popup
    interface Product {
        id: string;
        title: string;
        category: string;
        price: number;
        image: string;
        description: string;
    }
    
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    // Filtrarea produselor
    const filteredProducts = products.filter((product) => {
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

    // Funcții pentru paginare
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

    // Deschide popup-ul pentru un produs selectat
    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setShowPopup(true);
    };

    return (
        <Layout>
            {/* Secțiunea Hero */}
            <section className={styles.heroSection}></section>

            {/* Secțiunea de Filtrare */}
            <section className={styles.filterSection}>
                <div className={styles.filterWrapper}>
                    {['Toate', 'Îmbrăcăminte', 'Birotică', 'Accesorii'].map((category) => (
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

            {/* Secțiunea de Produse */}
            <section className={styles.storiesSection}>
                <div className={styles.container}>
                    <div className={styles.cardsWrapper}>
                        {currentProducts.map((product) => (
                            <div
                                key={product.id}
                                className={styles.card}
                                onClick={() => handleProductClick(product)}
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

                {/* Secțiunea de Navigare */}
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

            {/* Popup pentru produs */}
            {showPopup && selectedProduct && (
    <div className={styles.popup}>
        <div className={styles.popupContent}>
            <button
                className={styles.closeButton}
                onClick={() => setShowPopup(false)}
            >
                &times;
            </button>
            <div className={styles.popupWrapper}>
                {/* Secțiunea stângă cu imaginea */}
                <div className={styles.popupImageWrapper}>
                    <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        width={300}
                        height={300}
                        className={styles.popupImage}
                    />
                </div>
                {/* Secțiunea dreaptă cu detalii */}
                <div className={styles.popupDetails}>
                    <h2 className={styles.popupTitle}>{selectedProduct.title}</h2>
                    <p className={styles.popupPrice}>{selectedProduct.price} RON</p>
                    <button
                        className={styles.popupBuyButton}
                        onClick={() => {
                            alert(`Ai cumpărat ${selectedProduct.title}`);
                            setShowPopup(false);
                        }}
                    >
                        Adaugă în coș
                    </button>
                    <p className={styles.popupDescription}>
                        {selectedProduct.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
)}

        </Layout>
    );
};

export default MerchPage;
