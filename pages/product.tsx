import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Pentru a obține ID-ul produsului din URL
import Layout from '../src/app/layout';
import data from '../src/app/data/produse.json';
import styles from '../src/app/style/ProductPage.module.css'; // Stiluri personalizate

const ProductPage = () => {
    // Obținem ID-ul produsului din URL
    const { id } = useParams<{ id: string }>();
    
    // Găsim produsul în baza ID-ului
    const product = data.products.find((prod) => prod.id === id);

    if (!product) {
        return <Layout><h2>Produsul nu a fost găsit</h2></Layout>;
    }

    // State pentru stilul și mărimea produsului (în cazul în care produsul este tricou)
    const [selectedStyle, setSelectedStyle] = useState<string>('Feminin');
    const [selectedSize, setSelectedSize] = useState<string>('S');

    return (
        <Layout>
            <div className={styles.productContainer}>
                {/* Imaginea Produsului */}
                <div className={styles.productImageWrapper}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className={styles.productImage}
                    />
                </div>

                {/* Detalii Produs */}
                <div className={styles.productDetails}>
                    <h1 className={styles.productTitle}>{product.title}</h1>
                    <p className={styles.productPrice}>Donatie minima recomandata: {product.price} RON</p>

                    {/* Buton Adaugă în Coș */}
                    <button className={styles.addToCartButton}>Adauga in cos</button>

                    {/* Descriere Produs */}
                    <p className={styles.productDescription}>{product.description}</p>
                    
                    {/* Mesaj privind investiția în educație */}
                    <p className={styles.investmentNote}>
                        Investitia ta in acest produs sustine educatia si dezvoltarea copiilor din Romania.
                    </p>

                    {/* Opțiuni pentru Tricouri */}
                    {product.category === 'Tricouri' && (
                        <div className={styles.tricouOptions}>
                            {/* Selectare Stil */}
                            <div className={styles.option}>
                                <label className={styles.optionLabel}>Stil:</label>
                                <button
                                    className={`${styles.optionButton} ${selectedStyle === 'Feminin' ? styles.activeOption : ''}`}
                                    onClick={() => setSelectedStyle('Feminin')}
                                >
                                    Feminin
                                </button>
                                <button
                                    className={`${styles.optionButton} ${selectedStyle === 'Masculin' ? styles.activeOption : ''}`}
                                    onClick={() => setSelectedStyle('Masculin')}
                                >
                                    Masculin
                                </button>
                            </div>

                            {/* Selectare Marime */}
                            <div className={styles.option}>
                                <label className={styles.optionLabel}>Marime:</label>
                                {['S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        className={`${styles.optionButton} ${selectedSize === size ? styles.activeOption : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ProductPage;
