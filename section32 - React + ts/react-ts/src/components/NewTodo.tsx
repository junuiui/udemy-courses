import { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

// handles new form
const NewTodo: React.FC<NewTodoProps> = (props) => {

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  )
}

export default NewTodo