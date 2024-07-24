import { useEffect, useState } from "react";
import { getSuspectsNumber } from "../apis/getSuspectsNumber";
import { useStore } from "zustand";
import useSuspectStore from "../client/suspectInfor";
import { Suspect } from "..";

interface propsType {
    suspectNumber: number;
}
export default function Conversation({ suspectNumber }: propsType) {
    const { suspectArray } = useStore(useSuspectStore);
    const [chatList, setChatList] = useState<string[]>([]);
    const [firstLine, setFirstLine] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            if (suspectNumber !== -1) {
                const result = await getSuspectsNumber(suspectNumber);

                if (result.statusCode === 200) {
                    setFirstLine(result.data.firstLine);
                    setChatList(result.data.chatList);
                }
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [suspectNumber]);

    const suspect = suspectArray.find(
        (suspect) => suspect.suspectNumber === suspectNumber,
    ) as Suspect;

    return (
        <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="border-[1px] border-black h-[15%] bg-[#f4f4f4] p-3 rounded-3xl flex justify-center items-center">
                <div className="text-black font-[Pretendard-Bold]">
                    {firstLine}
                </div>
            </div>
            <div className="w-full overflow-scroll text-mainColor h-[40dvh]">
                {chatList.map((val, idx) =>
                    idx % 2 === 0 ? (
                        <div className="flex justify-end" key={idx}>
                            <div className="bg-[#f4f4f4] border-[1px] border-[#e3e3e3] py-5 px-3 rounded-3xl max-w-[50%]">
                                {val}
                            </div>
                        </div>
                    ) : (
                        <div
                            className="flex flex-col items-start gap-1"
                            key={idx}
                        >
                            <img
                                src={suspect.suspectImageUrl}
                                alt="img"
                                className="rounded-full border-[1px] border-mainColor size-8"
                            />
                            <div className="bg-[#f4f4f4] border-[1px] border-[#e3e3e3] py-5 px-3 rounded-3xl max-w-[50%]">
                                {val}
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}
