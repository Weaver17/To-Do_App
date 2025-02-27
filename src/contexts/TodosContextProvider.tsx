import { createContext, useEffect, useState } from "react";
import { Todo } from "../utils/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

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

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");

  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

function TodosContextProvider({ children }: TodoContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  const { isAuthenticated } = useKindeAuth();

  // DERIVED STATE
  const todoListLength = todos.length;
  const completedTodosLength = todos.filter((todo) => todo.isCompleted).length;

  // EVENT HANDLERS / ACTIONS
  const handleAddTodo = (value: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
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

  // Initial Fetch
  // LOCAL STORAGE

  // ADD
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // API CALL
  //   useEffect(() => {
  //     const fetchTodos = async () => {
  //       const res = await fetch("https://bytegrad.com/course-assets/api/todos");

  //       const todos = await res.json();
  //       setTodos(todos);
  //     };
  //     fetchTodos();
  //   }, []);

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
