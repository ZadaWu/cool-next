import NewsList from '@/componenets/news-list';
import { getNewsByYear } from '@/lib/news';

export default function NewsPage({params}) {
    const year = params.year;
    const news = getNewsByYear(year);
    console.log('Rendering NewsPage component');
    return (
      <main>
        <h1>News Page</h1>
        <NewsList news={news} />
      </main>
    );
}
  