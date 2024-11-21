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

export function getNewsByYearAndMonth(year, month) {
    return DUMMY_NEWS.filter((news) => news.date.startsWith(year) && news.date.split('-')[1] === month);
}

export function getAvaiableNewsMonths(year) {
    return [...new Set(DUMMY_NEWS.filter((news) => news.date.startsWith(year)).map((news) => news.date.split('-')[1]))];
}

export function getAllNews() {
    return DUMMY_NEWS;
}