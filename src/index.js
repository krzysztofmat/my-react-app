import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Car from './Car';
import Garage from './Garage';
import Football from './Football';
import Goal from './Goal';
import GoalAndVersion from './GoalAndVersion';
import GoalAndTernary from './GoalAndTernary';
import GarageList from './GarageList';


const myFirstElement = <h1>Hello React!!!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {myFirstElement}
    <Car />
    <Garage />
    <Football />
    <Goal />
    <Goal isGoal={true} />
    <GoalAndVersion isGoal={true} />
    <GoalAndTernary />
    <GarageList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
