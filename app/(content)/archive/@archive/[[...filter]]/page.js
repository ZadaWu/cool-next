import { getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth, getAvailableNewsMonths } from '@/lib/news';
import Link from 'next/link';
import NewsList from '@/componenets/news-list';

export default async function FilteredNewsPage({ params }) {
    const { filter } = params;

    let news;
    let links = await getAvailableNewsYears(filter);

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    if(selectedYear && !selectedMonth) {
        news = await getNewsForYear(selectedYear);
        links = await getAvailableNewsMonths(selectedYear);
    }

    if (selectedMonth && selectedYear) {
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected filter.</p>;

    if(news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }
    const years  = await getAvailableNewsYears();
    const months  = await getAvailableNewsMonths(selectedYear);
    if ((selectedYear && !years.includes(selectedYear)) || (selectedMonth && !months.includes(selectedMonth))) {
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