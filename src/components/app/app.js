import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

const App = () => {
  //   const isLoggedIn = false;
  //   const loginBox = <span>Log in </span>;
  //   const welcomeBox = <span>Welcome Back</span>;
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make React App", important: false, id: 2 },
    { label: "Have a Lunch", important: false, id: 3 },
    { label: "Listen to Music", important: false, id: 4 },
    { label: "Play Football", important: false, id: 5 },
  ];

  return (
    <div className="todo-app">
      {/* {isLoggedIn ? welcomeBox : loginBox} */}
      <AppHeader todo={1} done={5} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList 
      todos={todoData} 
      onDeleted={(id) => console.log("del", id)} 
      />
      {/* <span>{new Date().toString()}</span> */}
    </div>
  );
};

export default App;
