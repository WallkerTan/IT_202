import React, { useRef, useEffect } from "react";

export default function S26_8_2() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const STORAGE_KEY = "scroll-s26_8_2";

    useEffect(() => {
        const saveScroll = sessionStorage.getItem(STORAGE_KEY);
        if (scrollRef.current && saveScroll) {
            scrollRef.current.scrollTop = parseInt(saveScroll);
        }
    }, []);

    useEffect(() => {
        const handalsaveScroll = () => {
            if (scrollRef.current) {
                sessionStorage.setItem(
                    STORAGE_KEY,
                    String(scrollRef.current.scrollTop)
                );
            }
        };
        window.addEventListener("beforeunload", handalsaveScroll);
        return () => {
            handalsaveScroll();
            window.removeEventListener("beforeunload", handalsaveScroll);
        };
    }, []);
    return (
        <div
            ref={scrollRef}
            className="overflow-y-scroll scrollbar-custom w-full h-[500px]"
        ></div>
    );
}
