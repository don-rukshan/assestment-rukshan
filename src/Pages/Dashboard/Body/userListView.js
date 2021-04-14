import React from "react";
import { selectUserList } from "../../../redux/userListSlice";
import { useSelector } from "react-redux";
import menuPress from "../../../assets/Group 566.png";

import "./styles.css";

const COLOURS = ["#00aff0", "#25D366", "#5570b7", "#ffc03a", "#ff124a"];

const UserListView = ({ setMonitorUser }) => {
  const userListData = useSelector(selectUserList);

  return userListData?.map((user) => {
    return (
      <ul
        className="listView"
        onClick={() => setMonitorUser(user.user_id)}
        key={user.user_id}
      >
        <button
          className="list__btn"
          style={{
            backgroundColor: COLOURS[user.user_id % COLOURS.length],
          }}
        >
          {user.name[0].toUpperCase()}
        </button>
        {user.name}
        <img className="menuPress" src={menuPress} alt="menuPress" />
      </ul>
    );
  });
};

export default UserListView;
