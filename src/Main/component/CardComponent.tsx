import { useState } from "react";
import { useStore } from "zustand";
import storeSuspectInfor from "../../client/suspectInfor";
import { Link } from "react-router-dom";

export default function CardComponent() {
    const { suspectArray } = useStore(storeSuspectInfor);
    const [isHover, setIsHover] = useState([false, false, false, false]);

    return (
        <div className="flex justify-between w-11/12 h-full gap-4">
            {suspectArray.map((val, idx) => (
                <Link
                    to={`${val.suspectNumber}`}
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
                        src={val.suspectImageUrl}
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
                        >{`${val.suspectName} ${val.suspectAge}세 ${val.suspectGender}`}</div>
                        <div
                            className={`flex flex-col transition-opacity duration-500 ${
                                isHover[idx]
                                    ? "opacity-100 visible"
                                    : "opacity-0 invisible"
                            }`}
                        >
                            <div className="">{`직업 - ${val.suspectOccupation}`}</div>
                            <div className="font-[Pretendard-SemiBold]">
                                특이사항
                            </div>
                            <div className="">{val.suspectInfo}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
