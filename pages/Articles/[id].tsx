import { useRouter } from "next/router";
import ArticlePage from "../../src/app/components/article/ArticlePage";

const Article = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Se încarcă articolul...</div>;
    }

    return <ArticlePage articleId={id as string} />;
};

export default Article;
