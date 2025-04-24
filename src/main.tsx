import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import BgComponent from "./components/BgComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <Navbar />
    <BgComponent />
    <App />
    <Footer />
  </>,
);
