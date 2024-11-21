import { getNewsByYear } from '@/lib/news';
import NewsList from '@/componenets/news-list';
export default function FilteredNewsPage({ params }) {
    const { year } = params;
    const news = getNewsByYear(year);
    return (
        <div>
            <h1>Archive</h1>
            <NewsList news={news} />
        </div>
    );
}