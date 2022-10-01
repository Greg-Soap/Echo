import React, { useEffect } from "react";
import Form from "../components/Form/Form";
import NavBar from "../components/navBar/NavBar";
import Posts from "../components/posts/Posts";
import "../index.css";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
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
