import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

createRoot(document.getElementById("root")!).render(<App />);
