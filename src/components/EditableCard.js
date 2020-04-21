import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInitialAmount } from "../features/tasks/tasksSlice";
import { toCurrency } from "../utils";

const EditableCard = ({ balance, text, styles }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({initialAmount: balance});
  const dispatch = useDispatch();

  const confirmHandler = (event) => {
    event.preventDefault();
    setForm({ [event.target.name]: event.target.value });
  };

  const editHandler = () => {
    dispatch(setInitialAmount(form.initialAmount));
    setShow(false);
  };

  return (
    <div className="col s12 m8 offset-m2 l6 xl4">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content" onDoubleClick={() => setShow(!show)}>
            {show ? (
              <input
                name="initialAmount"
                id="initialAmount"
                type="number"
                className="validate amount-input"
                min="0"
                defaultValue={balance}
                required
                onChange={confirmHandler}
              />
            ) : (
              <h4 className="card_balance" title="Double click to edit">{toCurrency(balance)}</h4>
            )}
          </div>
          <div className={styles}>
            <div className="card_text">{text}</div>
            <button onClick={() => editHandler()} className="btn-small" disabled={!show}>
              Replenish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableCard;
