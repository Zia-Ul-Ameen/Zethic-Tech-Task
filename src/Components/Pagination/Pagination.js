import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import s from "./Pagination.module.css";
import { faker } from "@faker-js/faker";

const Pagination = () => {
  const [carInfo, setCarInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [curSelected, setCurSelected] = useState("");

  //   pagination
  const [carsPerPage, setCarsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const numOfTotalPages = Math.ceil(carInfo.length / carsPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  const indexOfLastTodo = currentPage * carsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - carsPerPage;

  const visibleCarsInfo = carInfo.slice(indexOfFirstTodo, indexOfLastTodo);

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setCurSelected("");
    }
  };
  const handleNext = () => {
    if (currentPage !== numOfTotalPages) {
      setCurrentPage(currentPage + 1);
      setCurSelected("");
    }
  };

  useEffect(() => {
    const loopUsers = [];
    for (let i = 0; i < 100000; i++) {
      const randomCar = faker.vehicle.manufacturer();
      const randomUser = faker.person.fullName();

      const user = {
        car: randomCar,
        user: randomUser,
      };
      loopUsers.push(user);
    }

    const fliteredCarUserInfo = {};
    loopUsers.forEach((data) => {
      const { car, user } = data;
      if (!fliteredCarUserInfo[car]) {
        fliteredCarUserInfo[car] = [];
      }
      fliteredCarUserInfo[car].push(user);
    });
    const cars = Object.keys(fliteredCarUserInfo);
    const users = Object.values(fliteredCarUserInfo);
    setCarInfo(cars);
    setUserInfo(users);
  }, []);

  const handleClick = (index) => {
    setCurSelected(index);
  };

  return (
    <div>
      <Navbar />
      <div className={s.parent}>
        <div className={s.listParent}>
          {visibleCarsInfo.map((data, i) => (
            <ul
              onClick={() => handleClick(i + 1)}
              className={`${curSelected === i + 1 ? s.active : ""}`}
            >
              <li>{data}</li>
            </ul>
          ))}
        </div>
        <p className={s.feedBack}>
          A paginated list of cars without duplicates <br></br> onClick open a
          sidebar with a list of users using that car.
        </p>
        <div className={`${s.restDiv} ${curSelected != 0 && s.toActive}`}>
          <p>
            List Of The Users Using The Model {visibleCarsInfo[curSelected - 1]}
          </p>
          <div className={s.restList}>
            {(userInfo[curSelected] || []).map((user) => (
              <ul>
                <li>{user}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className={s.pagination}>
        <p>
          <span className={s.prevNext} onClick={handlePrev}>
            Prev
          </span>
          {pages.map((page) => (
            <span
              className={`${s.stylePage} ${
                currentPage === page ? s.pageActive : ""
              }
              `}
              onClick={() => {
                setCurrentPage(page);
                setCurSelected("");
              }}
            >
              {page}
            </span>
          ))}
          <span className={s.prevNext} onClick={handleNext}>
            Next
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pagination;
