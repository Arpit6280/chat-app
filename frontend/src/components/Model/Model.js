import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";

function Model({ isVisible, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [options, setOptions] = useState([]);
  const [users, setUsers] = useState([]);
  // useState
  // let options=[];
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/all")
      .then((res) => {
        setOptions(res.data);
        console.log(res);
        // options=res.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // let options = [
  //   { name: "Option 1", id: 1 },
  //   { name: "Option 2", id: 2 },
  // ];
  let token = localStorage.getItem("token");
  const submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      name: groupName,
      users: users,
    };
    axios
      .post("http://localhost:4000/group/create", obj, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  const groupHandler = (e) => {
    setGroupName(e.target.value);
  };
  const selecthandler = (selectedList, selectedItem) => {
    console.log(selectedItem);
    setUsers((prev) => [...prev, selectedItem.id]);
    console.log(selectedList);
    console.log("hi");
  };
  console.log(users);
  return (
    <div
      className="fixed inset-0 bg-black
    bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          Modal
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="enter group name"
              value={groupName}
              onChange={groupHandler}
            />
            <Multiselect
              options={options} // Options to display in the dropdown
              displayValue="name" // Property name to display in the dropdown options
              onSelect={selecthandler}
            />
            <button>Create Group</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Model;
