import { getAvaiableNewsYears, getNewsByYear, getNewsByYearAndMonth, getAvaiableNewsMonths } from '@/lib/news';
import Link from 'next/link';
import NewsList from '@/componenets/news-list';

export default function FilteredNewsPage({ params }) {
    const { filter } = params;

    let news;
    let links = getAvaiableNewsYears(filter);

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    if(selectedYear && !selectedMonth) {
        news = getNewsByYear(selectedYear);
        links = getAvaiableNewsMonths(selectedYear);
    }

    if (selectedMonth && selectedYear) {
        news = getNewsByYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected filter.</p>;

    if(news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    if ((selectedYear && !getAvaiableNewsYears().includes(selectedYear)) || (selectedMonth && !getAvaiableNewsMonths(selectedYear).includes(selectedMonth))) {
        throw new Error('Invalid filter.');
    }

    return (
        <header id="archive-header">
            <h1>Archive</h1>
            <ul>
                {links.map((period) => <li key={period}><Link href={`/archive/${ selectedYear ? selectedYear + '/' : ''}${period}`}>{period}</Link></li>)}
            </ul>
            {newsContent}
        </header>
    );
}