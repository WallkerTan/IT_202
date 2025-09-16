import React from "react";

export default function Ex5() {
    return (
        <div>
            <p>Ex5</p>
            <div className="w-60 h-60 rounded-2xl bg-blue-200 relative flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-1xl bg-blue-400 p-4" >
                    <p>Relative parent</p>
                </div>
                <div className="absolute bottom-[5%] left-[5%] p-2 rounded-2xl bg-blue-600">
                    <button>Absolute child</button>
                </div>
            </div>
        </div>
    );
}
