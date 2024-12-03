"use client"
import { ArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react"

const ButtonComponent = () =>{
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    });
    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(
        <div>
         {
                (show) ? (
                    <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
                    <button onClick={jumpToTop} className="bg-color-primary text-color-white rounded-full p-2 hover:bg-color-white hover:text-color-primary transition">
                        <ArrowUp className="text-color-accent responsiveIcon" size={24}/>
                        <ArrowUp className="text-color-accent DesktopIcon" size={48}/>
                    </button>
                </div>
                ) : ""
            }
        </div>
    )
}
export default ButtonComponent