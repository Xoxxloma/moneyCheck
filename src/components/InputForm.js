import React, { useState } from "react";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { addTask, countBalance } from "../features/tasks/tasksSlice";


const InputForm = () => {
  const initialState = {
    date: "",
    title: "",
    amount: 0,
    id: "",
  };

  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);
  console.log('form', form)
  const confirmHandler = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    dispatch(addTask(form))
    dispatch(countBalance());
    setForm(initialState);
  };

  return (
    <form className="col s12" onSubmit={(e) => addTaskHandler(e)}>
      <div className="row">
        <div className="input-field col s12 m4">
          <i className="material-icons prefix">date_range</i>
          <input
            name="date"
            placeholder="Date"
            id="date"
            type="date"
            className="validate"
            onChange={confirmHandler}
            value={form.date}
            required
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="input-field col s12 m4">
          <i className="material-icons prefix">mode_edit</i>
          <input
            name="title"
            id="title"
            type="text"
            className="validate"
            placeholder="title"
            onChange={confirmHandler}
            value={form.title}
            required
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="input-field col s12 m4">
          <i className="material-icons prefix">attach_money</i>
          <input
            name="amount"
            placeholder="Amount"
            id="amount"
            type="number"
            className="validate"
            onChange={confirmHandler}
            value={form.amount}
            min="0"
            required
            // parse={value => parseInt(value, 10)}
          />
          <label htmlFor="amount">Amount</label>
        </div>

        <div className="input-field col m2 offset-m10">
          <button
            className="btn-large purple darken-1 w100"
            type="submit"
            name="id"
            onClick={() => setForm({ ...form, id: uniqid() })}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
