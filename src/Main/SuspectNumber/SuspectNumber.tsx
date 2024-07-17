import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SuspectInfor from "./component/SuspectInfor";
import { useStore } from "zustand";
import storeSuspectInfor from "../../client/suspectInfor";
import { postSuspectsQuestion } from "../../apis/postSuspectsQuestion";
import { Suspect } from "../..";
import { getSuspectsNumber } from "../../apis/getSuspectsNumber";

export default function SuspectNumber() {
    const { suspectNumber } = useParams();
    const stringToNumber = Number(suspectNumber);
    const { suspectArray } = useStore(storeSuspectInfor);
    // chatList scroll 될떄마다 스크롤 위치 바꾸기 위해서 ref를 갖고오고 변경되면 그떄에 따라 스크롤 위치 바꾸기
    const chatListRef = useRef<HTMLDivElement>(null);

    const [chatList, setChatList] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [firstLine, setFirstLine] = useState<string>("");

    const suspect: Suspect = suspectArray.find(
        (val) => val.suspectNumber === stringToNumber,
    ) as Suspect;

    const onsubmitConversation = async (event: React.FormEvent) => {
        event.preventDefault();
        if (inputValue) {
            const question = inputValue;
            setInputValue("");
            setChatList((prevList) => [...prevList, question]);
            const result = await postSuspectsQuestion(stringToNumber, question);
            console.log(result);


    useEffect(() => {
        if (chatListRef.current) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
        }
    }, [chatList]);

    useEffect(() => {
        const fetchData = async () => {

            const result = await getSuspectsNumber(stringToNumber);


            if (result.statusCode === 200) {
                setFirstLine(result.data.firstLine);
                setChatList(result.data.chatList);
            }
        };
        fetchData();
    }, [stringToNumber]);

    return (
        <div className="z-10 flex items-center justify-around w-full py-32 h-dvh">
            <SuspectInfor />
            <div className="w-3/5 h-full rounded-[20px] bg-white p-3 gap-3 flex flex-col">
                <div className="border-[1px] border-black h-[15%] bg-[#f4f4f4] p-3 rounded-3xl flex justify-center items-center">
                    <div className="text-black font-[Pretendard-Bold]">
                        {firstLine}
                    </div>
                </div>
                <div
                    className="border-b-[1px] border-b-[#c1c1c1] w-full h-3/4 overflow-scroll text-mainColor"
                    ref={chatListRef}
                >
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
                <form
                    className="w-full h-[10%] text-mainColor flex relative"
                    onSubmit={onsubmitConversation}
                >
                    <input
                        type="text"
                        maxLength={120}
                        placeholder="질문 기회는 총 5번이며 최대 120자 내로 질문할 수 있습니다."
                        className="w-full h-full rounded-3xl bg-[#e3e3e3] pl-4 pr-16 outline-none"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute cursor-pointer right-3 top-[10%]"
                        onClick={onsubmitConversation}
                    >
                        <path
                            d="M26.6666 20L19.9999 13.3333M19.9999 13.3333L13.3333 20M19.9999 13.3333V26.6666M36.6666 20C36.6666 29.2047 29.2047 36.6666 19.9999 36.6666C10.7952 36.6666 3.33325 29.2047 3.33325 20C3.33325 10.7952 10.7952 3.33331 19.9999 3.33331C29.2047 3.33331 36.6666 10.7952 36.6666 20Z"
                            stroke="#1E1E1E"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </form>
            </div>
        </div>
    );
}
