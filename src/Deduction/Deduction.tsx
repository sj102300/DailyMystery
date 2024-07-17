import SuspectsCard from "./Cards";
import { useEffect, useState } from "react";
import { GetSuspectsInfo } from "./getSuspectInfo";
import { Suspect } from "..";
import { Link } from 'react-router-dom';

export default function Deduction() {

    let [suspects, setSuspects] = useState<Suspect[]>([]);
    let [selected, setSelected] = useState<number>(-1);

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetSuspectsInfo();
            setSuspects(data);
        }
        fetchData();
    }, [])

    return (
        <div className="z-10 flex flex-col items-center w-full gap-6 py-32 h-dvh">
            <SuspectsCard suspects={suspects} selected={selected} setSelected={setSelected} />
            <div className="text-white font-[Pretendard-SemiBold] text-xl">
                누가 범인인가요? 범인을 선택해주세요
            </div>
            <div className="flex flex-row gap-4">
                <Link to={'/ending'}>
                    <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                        <div className="text-xl">제출하기</div>
                    </div>
                </Link>
                <Link to={'/main'}>
                    <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                        <div className="text-xl" >더 둘러보기</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
