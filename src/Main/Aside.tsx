import { Link, useLocation } from "react-router-dom";

export default function Aside() {

    const selected = {
        up: "flex items-center justify-center flex-1 p-5 cursor-pointer bg-mainColor rounded-l-3xl",
        down: "text-center font-[Pretendard-bold]"
    }

    const notSelected = {
        up: "flex items-center justify-center flex-1 p-5 bg-white border-l-2 cursor-pointer border-y-2 rounded-l-3xl border-mainColor",
        down: "text-center font-[Pretendard-bold] text-mainColor"
    }

    let location = useLocation();
    let main, evidence;

    if (location.pathname === '/main' || '/main/deduction'){
        main = selected;
        evidence = notSelected;
    }
    else{
        main = notSelected;
        evidence = selected
    }
    
    return (
        <div className="w-[5%] h-vdh pl-3 py-32 flex flex-col gap-5 z-10">
            <Link
                to={"/main"}
                className={main.up}
            >
                <div className={main.down}>
                    심문하기
                </div>
            </Link>
            <Link
                to={"/main/evidence"}
                className={evidence.up}>
                    <div className={evidence.down}>
                        사건현장
                    </div>
            </Link>
        </div>
    );
}
