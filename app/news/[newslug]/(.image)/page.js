"use client";

import DUMMY_NEWS from "@/dummy-news";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
export default function InterceptedImagePage({params}) {

    const router = useRouter();

    const newItemSlug = params.newslug;
    const newItem = DUMMY_NEWS.find((item) => item.id === newItemSlug);

    if (!newItem) {
        notFound();
    }   

    return (
        <>
            <div className="modal-backdrop" > 
                <dialog open className="modal" open>
                    <div className="fullscreen-image" onClick={() => router.back()}>
                        <img src={`/images/news/${newItem.image}`} alt={newItem.title} />   
                    </div>
                </dialog>
            </div>
        </>
    );
}