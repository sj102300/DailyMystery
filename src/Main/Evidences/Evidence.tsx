import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Evidence as EvidenceDTO } from "./evidence.type";
import { GetEvidences } from "./getEvidences";
import Cards from "./cards";
<<<<<<< HEAD


export default function Evidence(){

    let [evidences, setEvidences] = useState<Array<EvidenceDTO>>([])

    useEffect(()=>{
        let fetchData = async () => {
            let data = await GetEvidences();
            setEvidences(data);
        }
        fetchData();
    },[])

    return(
=======
import { useStore } from "zustand";
import useStoryLine from "../../client/storyLine";

export default function Evidence() {
    const { storyLine } = useStore(useStoryLine);
    let [evidences, setEvidences] = useState<Array<EvidenceDTO>>([]);
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetEvidences();
            setEvidences(data);
        };
        fetchData();
    }, []);

    return (
>>>>>>> ryu
        <div className="z-10 flex flex-col items-center w-full gap-6 py-32 h-dvh">
            <Cards evidences={evidences} />
            <div className="text-white font-[Pretendard-SemiBold] text-xl">
                사건현장의 증거를 확인해보세요
            </div>
<<<<<<< HEAD
            <Link to={"/main/deduction"}>
                <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                    <div className="text-xl ">범인 추리하기</div>
                </div>
            </Link>
        </div>
    )
}
=======
            <Link to={"/deduction"}>
                <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                    <div className="text-xl">범인 추리하기</div>
                </div>
            </Link>
            <div
                className="absolute flex items-center justify-center rounded-full cursor-pointer bg-mainColor bottom-6 right-6 size-14"
                onClick={() => setIsModal(true)}
            >
                <svg
                    width="26"
                    height="28"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5 16H10C10.2833 16 10.521 15.904 10.713 15.712C10.9043 15.5207 11 15.2833 11 15C11 14.7167 10.9043 14.479 10.713 14.287C10.521 14.0957 10.2833 14 10 14H5C4.71667 14 4.479 14.0957 4.287 14.287C4.09567 14.479 4 14.7167 4 15C4 15.2833 4.09567 15.5207 4.287 15.712C4.479 15.904 4.71667 16 5 16ZM5 12H13C13.2833 12 13.5207 11.904 13.712 11.712C13.904 11.5207 14 11.2833 14 11C14 10.7167 13.904 10.479 13.712 10.287C13.5207 10.0957 13.2833 10 13 10H5C4.71667 10 4.479 10.0957 4.287 10.287C4.09567 10.479 4 10.7167 4 11C4 11.2833 4.09567 11.5207 4.287 11.712C4.479 11.904 4.71667 12 5 12ZM5 8H13C13.2833 8 13.5207 7.904 13.712 7.712C13.904 7.52067 14 7.28333 14 7C14 6.71667 13.904 6.479 13.712 6.287C13.5207 6.09567 13.2833 6 13 6H5C4.71667 6 4.479 6.09567 4.287 6.287C4.09567 6.479 4 6.71667 4 7C4 7.28333 4.09567 7.52067 4.287 7.712C4.479 7.904 4.71667 8 5 8ZM2 18H16V4H2V18ZM2 20C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V4C0 3.45 0.195667 2.979 0.587 2.587C0.979 2.19567 1.45 2 2 2H6.2C6.41667 1.4 6.77933 0.916667 7.288 0.55C7.796 0.183333 8.36667 0 9 0C9.63333 0 10.2043 0.183333 10.713 0.55C11.221 0.916667 11.5833 1.4 11.8 2H16C16.55 2 17.021 2.19567 17.413 2.587C17.8043 2.979 18 3.45 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20H2ZM9 3.25C9.21667 3.25 9.396 3.179 9.538 3.037C9.67933 2.89567 9.75 2.71667 9.75 2.5C9.75 2.28333 9.67933 2.104 9.538 1.962C9.396 1.82067 9.21667 1.75 9 1.75C8.78333 1.75 8.60433 1.82067 8.463 1.962C8.321 2.104 8.25 2.28333 8.25 2.5C8.25 2.71667 8.321 2.89567 8.463 3.037C8.60433 3.179 8.78333 3.25 9 3.25Z"
                        fill="white"
                    />
                </svg>
            </div>
            {isModal && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 w-dvw h-dvh">
                    <div className="rounded-[20px] bg-[#f4f4f4] w-1/2 h-3/4 backdrop-blur-lg flex-col">
                        <div className="flex items-center  p-4 border-b-[1px] border-[#c1c1c1] justify-between">
                            <div className="text-mainColor font-[Pretendard-SemiBold] text-2xl">
                                사건개요
                            </div>
                            <div
                                className=" bg-[#d1180b] rounded-full cursor-pointer size-6 "
                                onClick={() => setIsModal(false)}
                            ></div>
                        </div>
                        <div className="p-4">
                            {storyLine.map((val, idx) =>
                                idx !== 0 ? (
                                    <div
                                        className="text-lg text-mainColor"
                                        key={idx}
                                    >
                                        {val}
                                    </div>
                                ) : null,
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
>>>>>>> ryu
