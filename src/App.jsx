import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import dotenv from "dotenv";

dotenv.config();
export default function App() {
  const location = useLocation();

  return (
    <>
      <Outlet location={location} key={location.pathname} />
    </>
  );
}
