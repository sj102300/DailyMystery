import { Link } from "react-router-dom";
import CardComponent from "./component/CardComponent";

export default function Main() {
    return (
        <div className="z-10 flex flex-col items-center py-32 w-dvw h-dvh gap-9">
            <CardComponent />
            <div className="text-white font-[Pretendard-Bold] text-2xl">
                용의자를 선택하여 심문하세요
            </div>
            <Link to={"/deduction"}>
                <div className="px-10 py-3 text-center border-2 border-white cursor-pointer bg-mainColor rounded-2xl">
                    <div className="font-[Pretendard-SemiBold] text-xl">
                        범인 추리하기
                    </div>
                </div>
            </Link>
        </div>
    );
}
