import { Link, useNavigate } from "react-router-dom";
import CardComponent from "./component/CardComponent";
import { useEffect } from "react";
import { checkIsSolved } from "../checkIsSolved";

// import { getSuspects } from "../apis/getSuspects";

export default function Main() {
    
    let navigate = useNavigate();

    //풀었는지 확인
    useEffect(() => {
        checkIsSolved() ? navigate('/') : null;
    }, []);

    return (
        <div className="z-10 flex flex-col items-center w-full gap-6 py-32 h-dvh">
            <CardComponent />
            <div className="text-white font-[Pretendard-SemiBold] text-xl">
                용의자를 선택하여 심문하세요
            </div>
            <Link to={"/main/deduction"}>
                <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                    <div className="text-xl ">범인 추리하기</div>
                </div>
            </Link>
        </div>
    );
}
