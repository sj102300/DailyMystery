<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import asideFocusStore from "../client/asideFocus";

export default function Aside() {
    const { focus, setFocusTrue, setFocusFalse } = useStore(asideFocusStore);

=======
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
    
>>>>>>> cb00040184a86b88455ff40e1edba13e624bf612
    return (
        <div className="w-[5%] h-vdh pl-3 py-32 flex flex-col gap-5 z-10">
            <Link
                to={"/main"}
<<<<<<< HEAD
                className="flex items-center justify-center flex-1 p-5 border-l-2 cursor-pointer rounded-l-3xl border-y-2"
                style={{
                    backgroundColor: focus ? "#1e1e1e" : "white",
                    borderColor: focus ? "" : "#1e1e1e",
                }}
                onClick={setFocusTrue}
            >
                <div
                    className="text-center font-[Pretendard-bold]"
                    style={{ color: focus ? "white" : "#1e1e1e" }}
                >
=======
                className={main.up}
            >
                <div className={main.down}>
>>>>>>> cb00040184a86b88455ff40e1edba13e624bf612
                    심문하기
                </div>
            </Link>
            <Link
                to={"/main/evidence"}
<<<<<<< HEAD
                className="flex items-center justify-center flex-1 p-5 border-l-2 cursor-pointer border-y-2 rounded-l-3xl "
                style={{
                    backgroundColor: !focus ? "#1e1e1e" : "white",
                    borderColor: !focus ? "" : "#1e1e1e",
                }}
                onClick={setFocusFalse}
            >
                <div
                    className="text-center font-[Pretendard-bold]"
                    style={{ color: focus ? "#1e1e1e" : "white" }}
                >
                    사건현장
                </div>
=======
                className={evidence.up}>
                    <div className={evidence.down}>
                        사건현장
                    </div>
>>>>>>> cb00040184a86b88455ff40e1edba13e624bf612
            </Link>
        </div>
    );
}
