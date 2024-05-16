import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}
