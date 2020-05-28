import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          // label={item.label}
          // important={item.important}
          {...itemProps}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      {/* <li>
        <TodoListItem label={todos[0].label} 
        important={todos[0].important} />
        </li> */}
      {elements}
    </ul>
  );
};

export default TodoList;
