import DUMMY_NEWS from '@/dummy-news';
import sql from 'better-sqlite3';

const db = sql('data.db');

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

export async function getAllNews() {
    const news = db.prepare('SELECT * FROM news').all();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return news;
}