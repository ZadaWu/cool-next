import DUMMY_NEWS from '@/dummy-news';
import Link from 'next/link';
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
          <Link href={`/news/${newslug}/image`}><img src={`/images/news${newsItem.image}`} className='news-image' alt={newsItem.title}/></Link>
          <h1>{newsItem.title}</h1>
          <time>{newsItem.date}</time>
        </header>
        <p>{newsItem.description}</p>
      </article>
    );
}
  