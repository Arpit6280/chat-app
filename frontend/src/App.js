import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SignUp from "./components/Login_&_SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <SignUp />
      <ToastContainer />
    </div>
  );
}

export default App;
