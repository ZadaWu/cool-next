import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function NewsImagePage({params}) {
    const newItemSlug = params.newslug;
    const newItem = await getNewsItem(newItemSlug);

    if (!newItem) {
        notFound();
    }   

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newItem.image}`} alt={newItem.title} />   
        </div>
    );
}