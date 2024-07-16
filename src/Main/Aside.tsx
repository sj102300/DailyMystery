import { Link } from "react-router-dom";

export default function Aside() {
    return (
        <div className="w-[5%] h-vdh pl-3 py-32 flex flex-col gap-5 z-10">
            <Link
                to={"/main"}
                className="flex items-center justify-center flex-1 p-5 cursor-pointer bg-mainColor rounded-l-3xl"
            >
                <div className="text-center font-[Pretendard-bold]">
                    심문하기
                </div>
            </Link>
            <Link
                to={"/main/evidence"}
            >
                <div className="flex items-center justify-center flex-1 p-5 bg-white border-l-2 cursor-pointer border-y-2 rounded-l-3xl border-mainColor">
                    <div className="text-center font-[Pretendard-bold] text-mainColor">
                        사건현장
                    </div>
                </div>
            </Link>
        </div>
    );
}
