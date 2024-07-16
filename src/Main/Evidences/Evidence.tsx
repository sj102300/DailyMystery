import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Evidence as EvidenceDTO } from "./evidence.type";
import { GetEvidences } from "./getEvidences";
import Cards from "./cards";


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
        <div className="z-10 flex flex-col items-center w-full gap-6 py-32 h-dvh">
            <Cards evidences={evidences} />
            <div className="text-white font-[Pretendard-SemiBold] text-xl">
                사건현장의 증거를 확인해보세요
            </div>
            <Link to={"/deduction"}>
                <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                    <div className="text-xl ">범인 추리하기</div>
                </div>
            </Link>
        </div>
    )
}