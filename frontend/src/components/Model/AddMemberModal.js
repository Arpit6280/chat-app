import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";

function AddMemberModal({ isVisible, onClose, preusers, groupId }) {
  const [options, setOptions] = useState([]);
  const [users, setUsers] = useState([]);

  if (preusers === undefined) console.log("no preusers");
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/all")
      .then((res) => {
        setOptions(res.data);
        setUsers([]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let token = localStorage.getItem("token");
  const submitHandler = (e) => {
    e.preventDefault();
    let obj = {
      groupId: groupId,
      users: users,
    };
    axios
      .post("http://localhost:4000/group/addNewMembers", obj, {
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
            <Multiselect
              disablePreSelectedValues
              options={options} // Options to display in the dropdown
              displayValue="name" // Property name to display in the dropdown options
              onSelect={selecthandler}
              selectedValues={preusers}
            />
            <button>Create Group</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMemberModal;
