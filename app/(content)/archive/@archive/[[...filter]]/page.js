import { getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth, getAvailableNewsMonths } from '@/lib/news';
import Link from 'next/link';
import NewsList from '@/componenets/news-list';
import { Suspense } from 'react';


async function FilterHeader({year, month}) {
    let links = await getAvailableNewsYears();

    if(year && !month) {
        links = await getAvailableNewsMonths(year);
    }

    if (year && month) {
        links = [];
    }

    return (
        <ul>
        {links.map((period) => <li key={period}><Link href={`/archive/${ year ? year + '/' : ''}${period}`}>{period}</Link></li>)}
        </ul>
    )
}

async function NewsContent({year, month}) {
    let news  = [];
    if(year && !month) {
        news = await getNewsForYear(year);
    }

    if (month && year) {
        news = await getNewsForYearAndMonth(year, month);
    }

    let newsContent = <p>No news found for the selected filter.</p>;

    if(news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }
    const years  = await getAvailableNewsYears();
    const months  = await getAvailableNewsMonths(year);
    if ((year && !years.includes(year)) || (month && !months.includes(month))) {
        throw new Error('Invalid filter.');
    }

    return newsContent;
}

export default async function FilteredNewsPage({ params }) {
    const { filter } = params;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    return (
        <header id="archive-header">
            <h1>Archive</h1>
            <Suspense fallback={<p>Loading Filter Header...</p>}>
                <FilterHeader year={selectedYear} month={selectedMonth}></FilterHeader>
            </Suspense>
            <Suspense fallback={<p>Loading Filter Content...</p>}>
                <NewsContent year={selectedYear} month={selectedMonth}></NewsContent>
            </Suspense>
        </header>
    );
}