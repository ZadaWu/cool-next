import NewsList from '@/componenets/news-list';
import { getLatestNews } from '@/lib/news';

// 允许定义默认会退内容，如果该旅游没有当前加载路径的更具体内容
export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();
    return (
        <>  
            <h2>Latest News</h2>
            <NewsList news={latestNews} />
        </>
    );
}