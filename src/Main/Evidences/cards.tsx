import { useState } from "react";
import { Evidence } from "./evidence.type";

export default function Cards({ evidences }: { evidences: Evidence[] }) {

    const [isHover, setIsHover] = useState([false, false, false, false]);

    return (
        <div className="flex justify-between w-11/12 h-full gap-4">
            {evidences.map((val, idx) => (
                <div
                    className="relative flex-1 h-full border-2 cursor-pointer rounded-xl"
                    key={idx}
                    onMouseEnter={() => {
                        setIsHover((prevState) => {
                            const newHoverState = [...prevState];
                            newHoverState[idx] = true;
                            return newHoverState;
                        });
                    }}
                    onMouseLeave={() => {
                        setIsHover((prevState) => {
                            const newHoverState = [...prevState];
                            newHoverState[idx] = false;
                            return newHoverState;
                        });
                    }}
                >
                    <img
                        src={val.evidenceImageUrl}
                        alt="image"
                        className="object-cover h-full rounded-lg"
                    />

                    <div
                        className={`absolute bottom-0 p-5 w-full rounded-b-lg bg-mainColor/60 left-0 min-h-20 flex flex-col transition-all duration-500 ${
                            isHover[idx]
                                ? "items-start h-1/2"
                                : "items-center h-[10%]"
                        }`}
                    >
                        <div
                            className={`font-[Pretendard-SemiBold] transition-all duration-500 ${
                                isHover[idx] ? "text-xl" : "text-lg"
                            }`}
                        >{val.evidenceName}</div>
                        <div
                            className={`flex flex-col transition-opacity duration-500 ${
                                isHover[idx]
                                    ? "opacity-100 visible"
                                    : "opacity-0 invisible"
                            }`}
                        >
                            <div className="">{val.evidenceInfo}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
