import React from 'react';
import { Todo } from './Todo';

const Todos = ({ todos, onDelete }) => {
  if (!todos || todos.length === 0) {
    return <div>No todos available.</div>;

  }

    let myStyle={
    minHeight:"70vh",
    margin:"40px auto",
    }
  

  return (
    <div className="container my-3 " style={myStyle}>
      <h3 className="text-center">Todos List</h3>
      {todos.map((todo) => (
       
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export { Todos };
