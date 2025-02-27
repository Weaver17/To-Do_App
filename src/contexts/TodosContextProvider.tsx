import { createContext, useState } from "react";
import { Todo } from "../utils/types";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  todoListLength: number;
  completedTodosLength: number;
  handleAddTodo: (value: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

function TodosContextProvider({ children }: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  // DERIVED STATE
  const todoListLength = todos.length;
  const completedTodosLength = todos.filter((todo) => todo.isCompleted).length;

  // EVENT HANDLERS / ACTIONS
  const handleAddTodo = (value: string) => {
    if (todos.length >= 3) {
      return alert("Log in to add more than 3 todos");
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: value,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t?.isCompleted };
        }

        return t;
      })
    );
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        todoListLength,
        completedTodosLength,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosContextProvider;
