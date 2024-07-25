<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";

export default function Aside() {
    const selected = {
        up: "flex items-center justify-center flex-1 p-5 cursor-pointer bg-mainColor rounded-l-3xl",
        down: "text-center font-[Pretendard-bold]",
    };

    const notSelected = {
        up: "flex items-center justify-center flex-1 p-5 bg-white border-l-2 cursor-pointer border-y-2 rounded-l-3xl border-mainColor",
        down: "text-center font-[Pretendard-bold] text-mainColor",
    };

    const location = useLocation();
    let main, evidence;

    // eslint-disable-next-line no-constant-condition
    if (location.pathname === "/main" || "/main/deduction") {
        main = selected;
        evidence = notSelected;
    } else {
        main = notSelected;
        evidence = selected;
    }

    return (
        <div className="w-[5%] h-vdh pl-3 py-32 flex flex-col gap-5 z-10">
            <Link to={"/main"} className={main.up}>
                <div className={main.down}>심문하기</div>
            </Link>
            <Link to={"/main/evidence"} className={evidence.up}>
                <div className={evidence.down}>사건현장</div>
=======
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import asideFocusStore from "../client/asideFocus";

export default function Aside() {
    const { focus, setFocusFalse, setFocusTrue } = useStore(asideFocusStore);

    return (
        <div className="w-[5%] h-vdh pl-3 py-32 flex flex-col gap-5 z-10">
            <Link
                to={"/main"}
                className="flex items-center justify-center flex-1 p-5 border-l-2 cursor-pointer rounded-l-3xl border-y-2"
                style={{
                    backgroundColor: focus ? "#1e1e1e" : "white",
                    borderColor: focus ? "white" : "#1e1e1e",
                }}
                onClick={setFocusTrue}
            >
                <div
                    className="text-center font-[Pretendard-bold]"
                    style={{
                        color: focus ? "white" : "#1e1e1e",
                    }}
                >
                    심문하기
                </div>
            </Link>
            <Link
                to={"/main/evidence"}
                className="flex items-center justify-center flex-1 p-5 border-l-2 cursor-pointer border-y-2 rounded-l-3xl "
                style={{
                    backgroundColor: !focus ? "#1e1e1e" : "white",
                    borderColor: !focus ? "white" : "#1e1e1e",
                }}
                onClick={setFocusFalse}
            >
                <div
                    className="text-center font-[Pretendard-bold]"
                    style={{
                        color: !focus ? "white" : "#1e1e1e",
                    }}
                >
                    사건현장
                </div>
>>>>>>> ryu
            </Link>
        </div>
    );
}
