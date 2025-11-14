import React from "react";

/**
 * 
 * @param props [object type] 
 * @returns 
 */
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => <li key={item}>item</li>)}
    </ul>
  );
}

export default Todos;