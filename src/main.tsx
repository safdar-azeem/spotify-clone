import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { SongProvider } from "./context/SongContext";
import "./index.css";
import "./assets/sass/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SongProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SongProvider>
);
