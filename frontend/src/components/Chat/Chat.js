import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import "./chat.css";

function Chat() {
  const [message, setMessage] = useState("");
  let token = localStorage.getItem("token");

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let now = new Date();

    // Get the current date, month, year, and time
    let currentDate = now.getDate(); // Returns the day of the month (1-31)
    let currentMonth = now.getMonth() + 1; // Returns the month (0-11) so add 1 to get the correct month
    let currentYear = now.getFullYear(); // Returns the year (four digits)
    let currentTime = now.toLocaleTimeString(); // Returns the current time in HH:mm:ss format
    let date = `${currentYear}-${currentMonth}-${currentDate}`;
    console.log(date);
    let obj = {
      date,
      currentTime,
      message,
    };

    console.log(`Current Time: ${currentTime}`);
    axios
      .post("http://localhost:4000/chat/msg", obj, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  return (
    <div className="w-full relative h-screen">
      <div className=" flex justify-center ">
        <div className="w-3/5 xl:w-2/5">
          <h1>Chat App</h1>
          <div className="w-full bg-gray-500">
            <p>You Joined</p>
          </div>
          <div>
            <p>Vaibhav Joined</p>
          </div>
          <div>
            <p>You: hi there Joined</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center ">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="border-2 w-3/5"
            value={message}
            onChange={messageHandler}
          />
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
