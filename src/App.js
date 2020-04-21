import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputForm from "./components/InputForm";
import Table from "./components/Table";
import CardContainer from "./components/CardContainer";
import MyModal from "./MyModal";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector((state) => state.name.name);
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Your purchases list {name.length === 0 ? "Stranger" : name}</h1>
        <CardContainer />
        <InputForm />
        <Table />
        <MyModal />
      </div>
    </>
  );
}

export default App;
