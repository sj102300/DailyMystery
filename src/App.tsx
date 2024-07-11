import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main.tsx";
import BackgroundImage from "./imgs/backgroundImageUrl.png";

export default function App() {
    return (
        <div
            className="flex min-h-screen bg-center bg-cover"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}
        >
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>
    );
}
