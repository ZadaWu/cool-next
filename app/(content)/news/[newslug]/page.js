import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/lib/news';

export default async function NewsDetailPage({params}) {
    const {newslug} = params;
    const newsItem = await getNewsItem(newslug);

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
  