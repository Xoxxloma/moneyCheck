import React from "react";
import { toCurrency } from "../utils";

const Card = ({balance, text, color}) => {

  return (
    <div className="col s12 m8 offset-m2 l6 xl4">
      <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-content">
            <h4 className="card_balance">{toCurrency(balance)}</h4>
          </div>
          <div className={color}>
            <div className="card_text">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
