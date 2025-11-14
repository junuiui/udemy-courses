import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todo-context";
import classes from './Todos.module.css'

/**
 * 
 * @param props [object type] 
 * @returns 
 */
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) =>
        <TodoItem
          key={item.id}
          todoText={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
      )}
    </ul>
  );
}

export default Todos;