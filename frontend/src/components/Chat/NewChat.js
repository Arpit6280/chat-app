/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Model from "../Model/Model";

function NewChat() {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal(true);
  };
  return (
    <div>
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
                      {/* <div className="flex-shrink-0">
                        <img src="" alt="" className="h-12 w-12 rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="#" className="focus:outline-none">
                          <span className="absolute inset-0" />
                          <p className="text-sm font-bold text-red-600">
                            Dries Vincent
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            Marketing Manager{" "}
                          </p>
                        </a>
                      </div> */}
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
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 mb-3 hover:bg-gray-200">
                      <div className="flex-shrink-0">
                        <img src="" alt="" className="h-10 w-10 rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              Lina Dry
                            </p>
                            <div className="text-gray-400 text-xs">12:35</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">Hi</p>
                            <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
                              2
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* user2 */}
                    <div className="relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 mb-3 hover:bg-gray-200">
                      <div className="flex-shrink-0">
                        <img src="" alt="" className="h-10 w-10 rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-red-600">
                              Lina Dry
                            </p>
                            <div className="text-gray-400 text-xs">12:35</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">Hi</p>
                            <div className="text-white text-xs bg-red-400 rounded-full px-1 py-0">
                              2
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Middle Content Start */}
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
                {/* message start here */}
                <div className="flex flex-col space py-4 p-3 overflow-y-auto scrollbar-thumb-blue scollbar-thumb-rounded scrollbar-track-blue-lighter scollbar-w-2 scrolling-touch">
                  {/* first message */}
                  <div className="chat-message ">
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

                  {/* second message */}
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
                  </div>
                </div>

                {/* message end here */}
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2">
                  <div className="relative flex">
                    <span className="absolute inset-y-0 flex items-center">
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
                    </span>
                    <input
                      type="text"
                      placeholder="write something"
                      className="focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200"
                    />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default NewChat;
