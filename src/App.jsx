import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

export default function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Outlet location={location} key={location.pathname} />
      </AnimatePresence>
    </>
  );
}
