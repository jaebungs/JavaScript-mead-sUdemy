import { v4 as uuidv4 } from "uuid";

let todos = [];

// Fetch existing todos from localStorage
const loadTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    todos = [];
  }

  return todos
};

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//expose todos
const getTodos = () => todos;

// Remove todo by id
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
  saveTodos()
};

const createTodos = (txt) => {
  todos.push({
    id: uuidv4(),
    text: txt,
    completed: false,
  });

  saveTodos();
};

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
  saveTodos();
};

todos = loadTodos();

export { getTodos, loadTodos, toggleTodo, createTodos, removeTodo };
