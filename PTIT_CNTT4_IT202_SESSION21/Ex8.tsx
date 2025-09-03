import React from "react";

export default function Ex8() {
    return (
        <>
            <div>Ex8</div>
            <div className="flex gap-[10px] border border-1 rounded-2xl p-1 w-[400px] m-1">
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
            </div>
            <div className="flex flex-row-reverse gap-[10px] border border-1 rounded-2xl p-1 w-[400px] m-1">
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
            </div>
            <div className="flex justify-between gap-[10px] border border-1 rounded-2xl p-1 w-[400px] m-1">
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
            </div>
            <div className="flex justify-around gap-[10px] border border-1 rounded-2xl p-1 w-[400px] m-1">
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
            </div>
            <div className="flex justify-evenly gap-[10px] border border-1 rounded-2xl p-1 w-[400px] m-1">
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
                <div className="p-[10px] aspect-square bg-blue-300">1</div>
            </div>
        </>
    );
}
