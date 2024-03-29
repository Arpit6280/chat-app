import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Model from "../Model/Model";
import AddMemberModal from "../Model/AddMemberModal";
// import "./chat.css";

function Chat() {
  const [message, setMessage] = useState("");
  const [groups, setGroups] = useState([]);
  let token = localStorage.getItem("token");
  const [groupName, setGroupName] = useState("");
  let [totalMsg, setTotalMsg] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showaddModal, setShowAddModal] = useState(false);
  const [groupmsg, setGroupMsg] = useState([]);
  const [groupId, setGroupId] = useState([]);
  const [members, setMembers] = useState([]);
  const modalHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const addmodalHandler = (e) => {
    e.preventDefault();
    setShowAddModal(true);
  };

  useEffect(() => {
    // request();
    //  const func=async()=>{
    getgroups();
    // changeGroup();
    // }
  }, []);

  const changeGroup = (id) => {
    console.log(id);
    setGroupId(id);
    axios
      .get(`http://localhost:4000/chat/getmsg?groupId=${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setGroupMsg(res.data);
        getMembersHandler(id);
      });
  };

  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:4000/group/removeUser?userId=${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        toast.success("member removed from group");
        getMembersHandler(groupId);
      })
      .catch((err) => {
        console.log(err);
        toast.error("error");
      });
  };

  const getMembersHandler = (id) => {
    axios
      .get(`http://localhost:4000/group/getmembers?groupId=${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
        setMembers(res.data);
      });
  };

  const getgroups = () => {
    axios
      .get(`http://localhost:4000/group/getgroups`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
        setGroups(res.data);
        setGroupId(res.data[0].id);
        changeGroup(res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function request() {
  //   // setInterval(() => {

  //   let localmsg = localStorage.getItem("msgs");

  //   if (localmsg === undefined || localmsg === null || localmsg === "[]") {
  //     localmsg = [];
  //   } else localmsg = JSON.parse(localmsg);

  //   let n = localmsg.length;
  //   let lId;
  //   if (n !== 0) lId = localmsg[n - 1].id;

  //   axios
  //     .get(`http://localhost:4000/chat/getmsg?lastmsg=${lId}`, {
  //       headers: { Authorization: token },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       let newMsg = res.data;
  //       let nmsgL = newMsg.length;
  //       if (nmsgL >= 10) {
  //         newMsg = newMsg.slice(0, 10);
  //       } else {
  //         let remL = 10 - nmsgL;
  //         let oldMsgL = localmsg.length;
  //         if (oldMsgL > remL) {
  //           localmsg = localmsg.slice(oldMsgL - remL, oldMsgL);
  //         }
  //       }

  //       let c = [...localmsg, ...newMsg];
  //       localStorage.setItem("msgs", JSON.stringify(c));
  //       setTotalMsg(c);
  //     })
  //     .catch((err) => {
  //       toast.error(err.response.data.msg);
  //     });
  //   // }, 1000);
  // }
  const messageHandler = (e) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hi");
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
      groupId,
    };

    console.log(`Current Time: ${currentTime}`);
    axios
      .post("http://localhost:4000/chat/addmsg", obj, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
        toast.success("message send successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  const groupHandler = (e) => {
    setGroupName(e.target.value);
  };
  const submitHandler2 = (e) => {
    e.preventDefault();
  };
  // console.log(totalMsg);

  // console.log(localStorage.getItem("msgs"));
  return (
    <>
      {/* <div className="w-full relative h-screen">
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

          <form onSubmit={modalHandler}>
            
            <button>Create Group</button>
          </form>
        </div>
      </div> */}

      <div>
        <div className="relative min-h-screen flex flex-col bg-gray-50">
          <nav className="flex-shrink-0 bg-red-600">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div></div>
                <div className="flex lg:hidden">
                  <button className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600">
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:block lg:w-80">
                  <div className="flex items-center justify-end">
                    <div className="flex">
                      <a
                        href=".#"
                        className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white"
                      >
                        Chat
                      </a>
                    </div>

                    <div className="ml-4 relative flex-shrink-0">
                      <div>
                        <button className="bg-red-700 flex text-sm rounded-full  text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">
                          <img className="h-8 w-8 rounded-full" src="" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* Nav Section end here */}

          {/* Chat layout start here */}
          <div className="flex-grow w-full max-w-7xl mx-auto lg:flex">
            <div className="flex-1 min-w-0 bg-white xl:flex">
              <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50">
                <div className="h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                  <div className="h-full relative">
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2">
                      <button
                        className="w-full bg-sky-400 hover:bg-gray-500 py-2 mb-2 text-white"
                        onClick={modalHandler}
                      >
                        + New Group
                      </button>
                    </div>
                    <div className="mb-4">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path />
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="focus:ring-red-500 focus:border-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border"
                        />
                      </div>
                    </div>
                    {/* Search Box end */}
                    {/* User */}
                    {groups.map((group, i) => (
                      <div
                        className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 mb-3 hover:bg-gray-200"
                        onClick={() => changeGroup(group.id)}
                      >
                        <div className="flex-shrink-0">
                          <img
                            src=""
                            alt=""
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              {group.name}
                            </p>
                            {/* <div className="text-gray-400 text-xs">12:35</div> */}
                          </div>
                          {/* <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 truncate">Hi</p>
        <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
          2
        </div>
      </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1 p:2 sm:pb-6 justify-between flex flex-col h-screen hidden xl:flex">
                <div className="flex-sm:items-center justify-between py-3 border-b border-gray-200 p-3">
                  <div className="flex items-center space-x-4">
                    <img
                      src=""
                      alt=""
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor pointer"
                    />
                    <div className="flex flex-col leading-tight">
                      <div className="text-1xl mt-1 flex items-center">
                        <span className="text-gray-700 mr-3" Kina Mayer></span>
                        <span className="text-green-500">
                          <svg width={10} height={10}>
                            <circle cx={5} cy={5} r={5} fill="currentColor" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col space py-4 p-3 overflow-y-auto scrollbar-thumb-blue scollbar-thumb-rounded scrollbar-track-blue-lighter scollbar-w-2 scrolling-touch">
                  {/* <div className="chat-message ">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                            Lorem Ipsum
                          </span>
                        </div>
                      </div>
                      <img
                        src=""
                        alt=""
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div>

                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-red-500 text-white">
                            Lorem Ipsum2
                          </span>
                        </div>
                      </div>
                      <img
                        src=""
                        alt=""
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="my-2 px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                            Lorem Ipsum
                          </span>
                        </div>
                      </div>
                      <img
                        src=""
                        alt=""
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="my-2 px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                            Lorem Ipsum
                          </span>
                        </div>
                      </div>
                      <img
                        src=""
                        alt=""
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span className="my-2 px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                            Lorem Ipsum
                          </span>
                        </div>
                      </div>
                      <img
                        src=""
                        alt=""
                        className="w-6 h-6 rounded-full order-1"
                      />
                    </div>
                  </div> */}

                  {groupmsg.map((msg) => (
                    <div className="chat-message ">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                              {msg.msg}
                            </span>
                          </div>
                        </div>
                        <img
                          src=""
                          alt=""
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* message end here */}
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2">
                  <div className="relative flex">
                    {/* <span className="absolute inset-y-0 flex items-center">
                      <button className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300">
                        <svg
                          className="h-6 w-6 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path />
                        </svg>
                      </button>
                    </span> */}

                    <form onSubmit={submitHandler}>
                      <input
                        type="text"
                        placeholder="write something"
                        value={message}
                        onChange={messageHandler}
                        className="focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200"
                      />
                      <button type="submit" style={{ cursor: "pointer" }}>
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
              <div className="h-full pl-6 py-6 lg:w-80">
                <div className="h-full relative">
                  <div className="m-auto text-center mb-10">
                    <img
                      src=""
                      alt=""
                      className="w-36 h-36 rounded-full m-auto"
                    />
                    <h2 className="m-auto text-2xl mt-2">Kina Mayer</h2>
                  </div>
                  <button
                    className="w-full bg-sky-400 hover:bg-gray-500 py-2 mb-2 text-white"
                    onClick={addmodalHandler}
                  >
                    + Add Members
                  </button>
                  {members.map((member) => (
                    <div>
                      <span>{member.name} </span>
                      <button onClick={() => deleteHandler(member.id)}>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={modalHandler}>
          <button>Create Group</button>
        </form>
      </div>

      <Model isVisible={showModal} onClose={() => setShowModal(false)} />
      <AddMemberModal
        isVisible={showaddModal}
        onClose={() => setShowAddModal(false)}
        preusers={members}
        groupId={groupId}
      />
    </>
  );
}

export default Chat;
