

import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";
export default async function InterceptedImagePage({params}) {
    const newItemSlug = params.newslug;
    const newItem = await getNewsItem(newItemSlug);

    if (!newItem) {
        notFound();
    }   

    return (
        <>
            <ModalBackdrop > 
                <dialog open className="modal" open>
                    <div className="fullscreen-image">
                        <img src={`/images/news/${newItem.image}`} alt={newItem.title} />   
                    </div>
                </dialog>
            </ModalBackdrop>
        </>
    );
}