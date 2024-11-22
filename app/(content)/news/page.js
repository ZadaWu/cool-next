import NewsList from '@/componenets/news-list';
import { getAllNews } from '@/lib/news';

export default function NewsPage({params}) {
    const year = params.year;
    const news = getAllNews(year);
    console.log('Rendering NewsPage component');
    return (
      <main>
        <h1>News Page</h1>
        <NewsList news={news} />
      </main>
    );
}
  