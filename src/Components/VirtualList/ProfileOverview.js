import React from "react";
import s from "./VirtualList.module.css";

const ProfileOverview = ({ users, selectedId }) => {
  console.log(users[selectedId]);
  console.log(selectedId);
  return (
    <div className={s.OverviewParent}>
      {users.length > 0 && (
        <div className={s.OverViewList}>
          <ul>
            <li>ID : {`${users[selectedId - 1]?.id}`}</li>
            <li>Username : {`${users[selectedId - 1]?.name}`}</li>
            <li>Country : {`${users[selectedId - 1]?.country}`}</li>
            <li>Age : {`${users[selectedId - 1]?.age}`}</li>
            <li>Phone No : {`${users[selectedId - 1]?.phone}`}</li>
            <li>Occupation : {`${users[selectedId - 1]?.ocupation}`}</li>
            <li>Vehicle : {`${users[selectedId - 1]?.vehicle}`}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileOverview;
