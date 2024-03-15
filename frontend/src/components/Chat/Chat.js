import React from "react";
// import "./chat.css";

function Chat() {
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
        <input type="text" className="border-2 w-3/5" />
        <button>send</button>
      </div>
    </div>
  );
}

export default Chat;
