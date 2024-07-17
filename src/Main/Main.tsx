import { Link } from "react-router-dom";
import CardComponent from "./component/CardComponent";

// import { getSuspects } from "../apis/getSuspects";

export default function Main() {
    const userId = 252;
    if (!localStorage.getItem("userId")) {
        localStorage.setItem("userId", String(userId));
    }

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
