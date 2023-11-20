import React from "react";
import UserList from "./Components/VirtualList/UserList";
import ProfileOverview from "./Components/VirtualList/ProfileOverview";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

const Virtualized_List = () => {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <Navbar />
      <div>
        <UserList
          users={users}
          setUsers={setUsers}
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
        {selectedId !== null ? (
          <ProfileOverview
            users={users}
            setUsers={setUsers}
            selectedId={selectedId}
          />
        ) : (
          <div className="virtualComment">
            Virtualized list of users with their User Name and Age in the left
            sidebar<br></br> which will be unpaginated. ( Use react-virtualized
            )<br></br> - onClick open a sidebar with full information of the
            user.
          </div>
        )}
      </div>
    </div>
  );
};

export default Virtualized_List;
