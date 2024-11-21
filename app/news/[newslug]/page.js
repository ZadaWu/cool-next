import DUMMY_NEWS from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({params}) {
    const {newslug} = params;
    const newsItem = DUMMY_NEWS.find((news) => news.id === newslug);

    if (!newsItem) {
        notFound();
    }

    return (
      <article className="news-detail">
        <header>
          <img src={`/images/news${newsItem.image}`} alt={newsItem.title}/>
          <h1>{newsItem.title}</h1>
          <time>{newsItem.date}</time>
        </header>
        <p>{newsItem.description}</p>
      </article>
    );
}
  