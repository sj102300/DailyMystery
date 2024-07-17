import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import backgroundImageUrl from "./imgs/background_image.png";
import Main from "./Main/Main.tsx";
import Aside from "./Main/Aside.tsx";
import Deduction from "./Deduction/Deduction.tsx";
import SuspectNumber from "./Main/SuspectNumber/SuspectNumber.tsx";
import Intro from "./Intro/intro.tsx";
import { useEffect } from "react";
import Story from "./Story/story.tsx";
import Evidence from "./Main/Evidences/Evidence.tsx";
import Ending from "./Ending/ending.tsx";

export default function App() {
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        //12시 넘어가면 새 문제 풀수있음. 초기화 과정
        let today = new Date().toISOString().split("T")[0];
        let currentDate = localStorage.getItem("currentDate");
        if (currentDate !== today) {
            localStorage.clear();
        }
        localStorage.setItem("currentDate", today);

        //유저가 풀던 기록있으면 바로 메인페이지로
        let userId = Number(localStorage.getItem("userId"));
        if (userId && userId !== -1) {
            navigate("/main");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="relative flex w-full h-full min-h-screen">
            {location.pathname.includes("main") && <Aside />}
            {/* absolute 사용해서 bgimage 고정 */}
            <div
                className="absolute top-0 z-0 bg-center h-dvh rounded-xl"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    filter: "blur(2px)",
                    width: location.pathname.includes("main") ? "95%" : "100%",
                    left: location.pathname.includes("main") ? "5%" : "0%",
                }}
            ></div>

            <div
                className="z-10 flex h-full"
                style={{
                    width: location.pathname.includes("main") ? "95%" : "100%",
                }}
            >
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="main" element={<Main />} />
                    <Route
                        path="main/:suspectNumber"
                        element={<SuspectNumber />}
                    />
                    <Route path="/main/evidence" element={<Evidence />} />
                    <Route path="deduction" element={<Deduction />} />
                    <Route path="/ending" element={<Ending />} />
                </Routes>
            </div>
        </div>
    );
}
