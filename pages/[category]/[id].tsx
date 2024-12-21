import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import fs from "fs";
import Image from "next/image";

const ARTICLES_JSON_PATH = '../src/app/data/articole.json';

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

export const getStaticPaths: GetStaticPaths = async () => {
    const jsonData = JSON.parse(fs.readFileSync(ARTICLES_JSON_PATH, "utf8"));

    const paths = jsonData.articles.map((article: Article) => ({
        params: {
            category: article.category,
            id: article.id,
        },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const jsonData = JSON.parse(fs.readFileSync(ARTICLES_JSON_PATH, "utf8"));

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
