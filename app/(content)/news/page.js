import NewsList from '@/componenets/news-list';
import { getAllNews } from '@/lib/news';
export default async function NewsPage({params}) {

  const news = getAllNews();

  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={news} />
    </main>
    );
}
  