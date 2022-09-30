import React from "react";
import Form from "../components/Form/Form";
import NavBar from "../components/navBar/NavBar";
import Posts from "../components/posts/Posts";
import "../index.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="Body">
        <Form />
        <Posts />
      </div>
    </>
  );
};

export default Home;
