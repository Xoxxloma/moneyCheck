import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultState } from "../features/tasks/tasksSlice";
import { setDefaultName } from "../features/nameSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.name.name)
  const refreshApp = useCallback(() => {
    if (window.confirm('Are you sure you want to refresh your app?')) {
      dispatch(setDefaultState())
      dispatch(setDefaultName())
    }
  }, [dispatch])

  return (
    <nav className="purple darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          {name.length === 0 ? "MoneyCheck" : `${name}'s money`} 
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <button className="btn waves-effect waves-light red" onClick={refreshApp}>Refresh</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
