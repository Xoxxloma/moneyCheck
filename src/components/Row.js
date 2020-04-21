import React, { useState } from "react";
import {
  editTask,
  countBalance,
  removeTask,
} from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import { toCurrency } from "../utils";

const Row = ({ t }) => {
  const initialState = {
    date: t.date,
    title: t.title,
    amount: t.amount,
    id: t.id,
  };

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const confirmHandler = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const editHandler = () => {
    dispatch(editTask(form));
    dispatch(countBalance());
    setShow(!show);
  };

  const deleteHandler = (task) => {
    dispatch(removeTask(task.id));
    dispatch(countBalance());
  };

  return (
    <tr key={t.id} onDoubleClick={() => setShow(!show)}>
      {show ? (
        <>
          <td>
            <input
              name="date"
              id="date"
              type="date"
              className="validate"
              value={t.date}
              readOnly
            />
          </td>
          <td>
            <input
              name="title"
              id="title"
              type="text"
              className="validate w50"
              defaultValue={`${t.title}`}
              required
              onChange={confirmHandler}
            />
          </td>
          <td>
            <input
              name="amount"
              id="amount"
              type="number"
              className="validate w50"
              defaultValue={`${t.amount}`}
              required
              onChange={confirmHandler}
            />
          </td>
          <td>
            <button
              className="btn purple darken-1"
              onClick={() => editHandler()}
            >
              Edit
            </button>
          </td>
        </>
      ) : (
        <>
          <td title="Double click to edit">{t.date}</td>
          <td title="Double click to edit">{t.title}</td>
          <td title="Double click to edit">{toCurrency(t.amount)}</td>
          <td>
            <button
              className="btn purple darken-1"
              onClick={() => {
                deleteHandler(t);
              }}
            >
              Delete
              <i className="material-icons left">delete</i>
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
