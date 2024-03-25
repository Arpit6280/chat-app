import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SignUp from "./components/Login_&_SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login_&_SignUp/Login";
import Chat from "./components/Chat/Chat";
import NewChat from "./components/Chat/NewChat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Chat />} />
      </Routes>
      {/* <NewChat /> */}
      <ToastContainer />
    </>
  );
}

export default App;
