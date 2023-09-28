import React from "react";
import bro from "../assets/images/bro.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage d-md-flex gap-5 align-items-center">
      <div className="d-flex flex-column text-start px-3">
        <h1 className="my-5">
          Manage your Tasks on <span>TaskDuty</span>{" "}
        </h1>
        <p className="gap-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt
          eveniet quasi consequatur quas saepe aperiam magnam, dolores
          consectetur iusto recusandae accusamus numquam hic architecto sequi
          perspiciatis nisi praesentium cupiditate.
        </p>
        <div>
          <Link
            to="/tasks"
            className="home-btn text-decoration-none px-2 py-1 text-white"
          >
            Go to My Tasks
          </Link>
        </div>
      </div>
      <div>
        <img src={bro} alt="task manager" />
      </div>
    </div>
  );
};

export default Home;
