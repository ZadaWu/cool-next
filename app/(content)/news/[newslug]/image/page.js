import DUMMY_NEWS from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsImagePage({params}) {
    const newItemSlug = params.newslug;
    const newItem = DUMMY_NEWS.find((item) => item.id === newItemSlug);

    if (!newItem) {
        notFound();
    }   

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newItem.image}`} alt={newItem.title} />   
        </div>
    );
}