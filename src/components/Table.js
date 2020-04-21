import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "./Row";
import { sortTasks } from "../features/tasks/tasksSlice";

const Table = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch()

  if (tasks.length === 0) {
    return <div>No Tasks yet</div>;
  }

  return (
    <table className="highlight centered">
      <thead>
        <tr>
          <th onClick={() => dispatch(sortTasks('date'))}>Date</th>
          <th onClick={() => dispatch(sortTasks('title'))}>Item Name</th>
          <th onClick={() => dispatch(sortTasks('amount'))}>Item Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((t) => (
          <React.Fragment key={t.id}>
            <Row t={t} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
