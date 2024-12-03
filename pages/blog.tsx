import React, { useState } from 'react';
import Layout from '../src/app/layout';
import articlesData from '../src/app/data/articole.json'; 
import styles from '../src/app/style/BlogPage.module.css'; // Stiluri personalizate

const BlogPage = () => {
    // Extrage articolele din obiectul JSON
    const articles = articlesData.articles;

    // State pentru filtrarea articolelor
    const [filter, setFilter] = useState('Toate');

    // Funcție pentru filtrarea articolelor (excluzând primul articol)
    const filteredArticles = articles.slice(1).filter((article) => {
        if (filter === 'Toate') {
            return true;
        }
        return article.category === filter;
    });

    // Funcția de click pentru a redirecționa către pagina unui articol specific
    const handleArticleClick = (id: string) => {
        window.location.href = '/blog/' + id;
    };

    return (
        <Layout>
            {/* Titlu pentru pagina Blog */}
            <section className={styles.pageTitleSection}>
                <h1 className={styles.pageTitle}>Blog</h1>
            </section>

            {/* Secțiunea Hero pentru primul articol */}
            {articles.length > 0 && (
                <section
                    className={styles.heroSection}
                    onClick={() => handleArticleClick(articles[0].id)}
                >
                    <div className={styles.heroContentWrapper}>
                        <div className={styles.heroImageWrapper}>
                            <img
                                src={articles[0].image}
                                alt={articles[0].title}
                                className={styles.heroImage}
                            />
                        </div>
                        <div className={styles.heroTextWrapper}>
                            <div className={styles.articleBadge}>
                                <span className={styles.badgeCategory}>
                                    {articles[0].category}
                                </span>
                                <span className={styles.readTime}>
                                    {articles[0].readTime}
                                </span>
                            </div>
                            <h2 className={styles.heroTitle}>
                                {articles[0].title}
                            </h2>
                            <p className={styles.heroDescription}>
                                {articles[0].description}
                            </p>
                            <div className={styles.heroFooter}>
                                <span className={styles.author}>
                                    Written by {articles[0].author}
                                </span>
                                <span className={styles.articleDate}>
                                    {articles[0].date}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Secțiunea de Filtrare */}
            <section className={styles.filterSection}>
                <div className={styles.filterWrapper}>
                    <button
                        className={`${styles.filterButton} ${
                            filter === 'Toate' ? styles.activeFilter : ''
                        }`}
                        onClick={() => setFilter('Toate')}
                    >
                        Toate categoriile
                    </button>
                    <button
                        className={`${styles.filterButton} ${
                            filter === 'COR' ? styles.activeFilter : ''
                        }`}
                        onClick={() => setFilter('COR')}
                    >
                        COR
                    </button>
                    <button
                        className={`${styles.filterButton} ${
                            filter === 'Jurnal de ONG' ? styles.activeFilter : ''
                        }`}
                        onClick={() => setFilter('Jurnal de ONG')}
                    >
                        Jurnal de ONG
                    </button>
                </div>
            </section>

            {/* Secțiunea de Articole */}
            <section className={styles.articlesSection}>
                <div className={styles.container}>
                    <div className={styles.cardsWrapper}>
                        {filteredArticles.map((article) => (
                            <div
                                key={article.id}
                                className={styles.articleCard}
                                onClick={() => handleArticleClick(article.id)}
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className={styles.articleImage}
                                />
                                <div className={styles.articleCardContent}>
                                    <div className={styles.articleBadge}>
                                        <span className={styles.badgeCategory}>
                                            {article.category}
                                        </span>
                                        <span className={styles.readTime}>
                                            {article.readTime}
                                        </span>
                                    </div>
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                    <p className={styles.articleDescription}>
                                        {article.description}
                                    </p>
                                    <div className={styles.articleFooter}>
                                        <span className={styles.author}>
                                            Written by {article.author}
                                        </span>
                                        <span className={styles.articleDate}>{article.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BlogPage;
