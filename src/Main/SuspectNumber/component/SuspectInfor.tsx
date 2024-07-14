import { useStore } from "zustand";
import storeSuspectInfor from "../../../client/suspectInfor";
import { useParams } from "react-router-dom";

export default function SuspectInfor() {
    const { suspectNumber } = useParams();
    const { suspectArray } = useStore(storeSuspectInfor);

    const suspect: Suspect = suspectArray.find(
        (val) => val.suspectNumber === Number(suspectNumber),
    ) as Suspect;

    return (
        <div className="relative w-1/4 h-full border-2 rounded-xl">
            <img
                src={suspect?.suspectImageUrl}
                alt="suspectImage"
                className="object-cover h-full rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-mainColor/60 w-full h-[40%] rounded-b-lg p-5">
                <div className="font-[Pretendard-SemiBold]  text-xl">{`${suspect.suspectName} ${suspect.suspectAge}세 ${suspect.suspectGender}`}</div>
                <div className="">{`직업 - ${suspect.suspectOccupation}`}</div>
                <div className="font-[Pretendard-SemiBold]">특이사항</div>
                <div className="">{suspect.suspectInfo}</div>
            </div>
        </div>
    );
}
