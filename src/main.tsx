import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
<<<<<<< HEAD

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
=======
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/SWDigital/">
        <App />
    </BrowserRouter>,
);
>>>>>>> jiSeung
