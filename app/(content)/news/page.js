import NewsList from '@/componenets/news-list';
import { getAllNews } from '@/lib/news';
export default async function NewsPage({params}) {
  // 直接在组件里获取数据，是nextjs的正确的使用方式，页面上会直接有数据生成，有利于SE0） 
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  const news = await response.json();

  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={news} />
    </main>
    );
}
  