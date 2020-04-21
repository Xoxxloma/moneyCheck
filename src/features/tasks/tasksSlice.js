import { createSlice } from "@reduxjs/toolkit";
import {orderBy} from 'lodash'

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    initialAmount: 0,
    costs: 0,
    currentBalance: 0,
    sort: 'asc'
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const idx = state.tasks.findIndex((c) => c.id === action.payload.id);
      state.tasks[idx] = {...state.tasks[idx], ...action.payload }
    },
    setInitialAmount: (state, action) => {
      state.initialAmount = action.payload
      state.currentBalance = action.payload - state.costs
    },
    countBalance: (state) => {
      state.costs = state.tasks.reduce((acc, value) => (acc + Number(value.amount)), 0)
      state.currentBalance = state.initialAmount - state.costs
    },
    sortTasks: (state, action) => {
      state.sort = state.sort === 'asc' ? 'desc' : 'asc'
      state.tasks = state.tasks.map(t => ({...t, amount: Number(t.amount)}));
      state.tasks = orderBy(state.tasks, action.payload, state.sort)
    },
    setDefaultState: (state) => ({
      tasks: [],
      initialAmount: 0,
      costs: 0,
      currentBalance: 0,
      sort: 'asc'
    })
  },
});

export const { addTask, removeTask, showInput, editTask, setInitialAmount, countBalance, setDefaultState, sortTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
