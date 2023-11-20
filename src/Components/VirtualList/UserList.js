import React, { useEffect, useState } from "react";
import { List } from "react-virtualized";
import { faker } from "@faker-js/faker";
import s from "./VirtualList.module.css";

const UserList = ({ users, setUsers, setSelectedId, selectedId }) => {
  const handleClick = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    const loopUser = [];
    for (let i = 0; i < 100; i++) {
      const randomName = faker.person.fullName();
      const randomAge = faker.number.int({ min: 18, max: 60 });
      const randomId = i + 1;
      const randomCountry = faker.location.country();
      const randomPhoneNumber = faker.phone.number();
      const randomOcupation = faker.person.jobTitle();
      const randomVehicle = faker.vehicle.vehicle();

      let user = {
        name: randomName,
        age: randomAge,
        id: randomId,
        country: randomCountry,
        phone: randomPhoneNumber,
        ocupation: randomOcupation,
        vehicle: randomVehicle,
      };
      loopUser.push(user);
    }
    setUsers(loopUser);
  }, []);

  const rowRenderer = ({ index, key, style }) => {
    const user = users[index];

    return (
      <div
        className={selectedId === user.id ? s.listTile : ""}
        key={key}
        style={style}
        onClick={() => handleClick(user.id)}
      >
        <div>{`Name: ${user.name}`}</div>
        <div>{`Age: ${user.age}`}</div>
      </div>
    );
  };

  return (
    <List
      width={350}
      height={672}
      rowCount={users.length}
      rowHeight={80}
      rowRenderer={rowRenderer}
      className={s.parent}
    />
  );
};

export default UserList;
