import React from "react";
import "../../App.css";
<<<<<<< HEAD
import List from './List';
const Dashboard = () => {
  return (
    <div>
      <List />
=======
import Navbar from "./Navbar";
import List from "./List";
import CreateResumeBtn from "./CreateResumeBtn";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <CreateResumeBtn />
        <List />
      </div>
>>>>>>> origin/main
    </div>
  );
};

export default Dashboard;
