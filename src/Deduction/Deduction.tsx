import { useNavigate } from "react-router-dom";
import SuspectsCard from "./Cards";
import { useEffect, useState } from "react";
import { GetSuspectsInfo } from "./getSuspectInfo";
import { Suspect } from "..";

export default function Deduction() {

    let navigate = useNavigate();

    let [suspects, setSuspects] = useState<Suspect[]>([]);
    let [selected, setSelected] = useState<number>(-1);

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetSuspectsInfo();
            setSuspects(data);
        }
        fetchData();
    }, [])

    const submit = () => {
        navigate('/ending');
    }

    return (
        <div className="z-10 flex flex-col items-center w-full gap-6 py-32 h-dvh">
            <SuspectsCard suspects={suspects} selected={selected} setSelected={setSelected}/>
            <div className="text-white font-[Pretendard-SemiBold] text-xl">
                누가 범인인가요? 범인을 선택해주세요
            </div>
            <div className="flex flex-row gap-4">
            <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl"
                onClick={submit}>
                <div className="text-xl">제출하기</div>
            </div>
            <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl"
                onClick={() => navigate('/main')}>
                <div className="text-xl" >더 둘러보기</div>
            </div>
            </div>
        </div>
    );
}
