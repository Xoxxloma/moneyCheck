import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import EditableCard from "./EditableCard";

const CardContainer = () => {

  const balance = useSelector((state) => state.tasks)

  return (
    <div className="row">
      <EditableCard balance={balance.initialAmount} text="Initial amount" styles="card-action green accent-2 flex jcsb"/>
      <Card balance={balance.costs} text="Costs" color="card-action lime accent-2"/>
      <Card balance={balance.currentBalance} text="Current Balance" color="card-action light-green accent-2"/>
    </div>
  );
};

export default CardContainer
