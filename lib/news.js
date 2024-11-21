import DUMMY_NEWS from '@/dummy-news';

export function getLatestNews() {
    return DUMMY_NEWS.slice(0, 3);
}

export function getAvaiableNewsYears() {
    return [...new Set(DUMMY_NEWS.map((news) => news.date.split('-')[0]))];
}

export function getNewsByYear(year) {
    return DUMMY_NEWS.filter((news) => news.date.startsWith(year));
}