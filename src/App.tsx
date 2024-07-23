import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import backgroundImageUrl from "./imgs/background_image.png";
import Main from "./Main/Main.tsx";
import Aside from "./Main/Aside.tsx";
import Deduction from "./Deduction/Deduction.tsx";
import SuspectNumber from "./Main/SuspectNumber/SuspectNumber.tsx";
import Intro from "./Intro/intro.tsx";
import { useEffect, useState } from "react";
import Story from "./Story/story.tsx";
import Evidence from "./Main/Evidences/Evidence.tsx";
import { GetBackgroundImage } from "./apis/getBackground.ts";
import EndingPage from "./Ending/EndingPage.tsx";
import { checkIsSolved } from "./checkIsSolved.ts";


export default function App() {
    const location = useLocation();
    let navigate = useNavigate();

    let [isSolved, setIsSolved] = useState<boolean>(false);
    let [backgroundImageUrl, setBackgroundImageUrl] = useState<string>('');

    useEffect(() => {
        //12시 넘어가면 새 문제 풀수있음. 초기화 과정
        let offset = new Date().getTimezoneOffset() * 60000;
        let today = new Date(Date.now() - offset).toISOString().split("T")[0];
        let currentDate = localStorage.getItem("currentDate");
        console.log(today, currentDate);
        if (currentDate !== today) {
            localStorage.clear();
        }
        localStorage.setItem("currentDate", today);

        setIsSolved(checkIsSolved());

        //유저가 풀던 기록있으면 바로 메인페이지로
        let userId = Number(localStorage.getItem("userId"));
        if (userId && userId !== -1) {
            navigate("/main");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(()=>{
        let fetchData = async () => {
            let data = await GetBackgroundImage();
            setBackgroundImageUrl(data);
        }
        fetchData();
    },[])

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
                    <Route path="/" element={<Intro isSolved={isSolved}/>} />
                    <Route path="/story" element={<Story />} />
                    <Route path="main" element={<Main />} />
                    <Route
                        path="main/:suspectNumber"
                        element={<SuspectNumber />}
                    />
                    <Route path="/main/evidence" element={<Evidence />} />
                    <Route path="/main/deduction" element={<Deduction />} />
                    <Route path="/ending" element={<EndingPage />} />
                </Routes>
            </div>
        </div>
    );
}
