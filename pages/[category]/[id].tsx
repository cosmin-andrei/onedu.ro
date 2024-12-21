import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Image from "next/image";

type Article = {
    id: string;
    title: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    description: string;
    image: string;
};

const ArticlePage = ({ article }: { article: Article }) => {
    const router = useRouter();

    // Afișează un mesaj de încărcare dacă ruta nu este pregătită
    if (router.isFallback) {
        return <div>Se încarcă...</div>;
    }

    if (!article) {
        return <div>Articolul nu a fost găsit.</div>;
    }

    return (
        <div>
            <Image src={article.image} alt={article.title} />
            <h1>{article.title}</h1>
            <p>{article.date} · {article.readTime}</p>
            <p>{article.description}</p>
            <p>Autor: {article.author}</p>
        </div>
    );
};

// Functia `getStaticPaths` pentru generarea rutelor dinamice
export const getStaticPaths: GetStaticPaths = async () => {
    const filePath = path.join(process.cwd(), "data", "articole.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const paths = jsonData.articles.map((article: Article) => ({
        params: {
            category: article.category,
            id: article.id,
        },
    }));

    return { paths, fallback: true };
};

// Functia `getStaticProps` pentru a prelua datele unui articol
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const filePath = path.join(process.cwd(), "data", "articole.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const article = jsonData.articles.find(
        (article: Article) =>
            article.id === params?.id && article.category === params?.category
    );

    if (!article) {
        return { notFound: true };
    }

    return {
        props: {
            article,
        },
    };
};

export default ArticlePage;
