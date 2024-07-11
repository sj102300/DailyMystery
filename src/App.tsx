import { Route, Routes, useLocation } from "react-router-dom";
import backgroundImageUrl from "./imgs/background_image.png";
import Main from "./Main/Main.tsx";
import Aside from "./Main/Aside.tsx";
import Deduction from "./Deduction/Deduction.tsx";

export default function App() {
    const location = useLocation();

    return (
        <div className="relative flex w-full h-full min-h-screen">
            {location.pathname === "/main" && <Aside />}
            {/* absolute 사용해서 bgimage 고정 */}
            <div
                className="absolute top-0 z-0 bg-center h-dvh rounded-xl"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    filter: "blur(2px)",
                    width: location.pathname === "/main" ? "95%" : "100%",
                    left: location.pathname === "/main" ? "5%" : "0%",
                }}
            ></div>

            <div className="z-10 flex w-full h-full">
                <Routes>
                    <Route path="main" element={<Main />} />
                    <Route path="deduction" element={<Deduction />} />
                </Routes>
            </div>
        </div>
    );
}
