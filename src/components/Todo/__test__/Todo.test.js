import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

// Intergation Test
const MockTodo = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

it("adding todos", () => {
  render(<MockTodo />);

  const inputElement = screen.getByPlaceholderText(/type.../i);
  fireEvent.change(inputElement, {
    target: {
      value: "Play Basketball",
    },
  });

  const buttonELement = screen.getByRole("button", { name: /add/i });
  fireEvent.click(buttonELement);

  const todoItem = screen.getByText(/Play Basketball/i);
  expect(todoItem).toBeInTheDocument();
});

const addTodosDry = (todos) => {
  const buttonELement = screen.getByRole("button");
  const inputElement = screen.getByPlaceholderText(/type.../i);

  todos.forEach((todo) => {
    fireEvent.change(inputElement, {
      target: {
        value: todo,
      },
    });
    fireEvent.click(buttonELement);
  });
};

it("adding todos 2", () => {
  render(<MockTodo />);

  addTodosDry(["hike for 20 mins", "buy chocolate", "movie tickets"]);

  const todoItems = screen.getAllByTestId(/todo-item/i);
  expect(todoItems.length).toBe(3);
});

it("checking for strikethrough style on clicking a todo", () => {
  render(<MockTodo />);
  addTodosDry(["visit zoo"]);

  const todoElement = screen.getByText(/visit zoo/i);
  fireEvent.click(todoElement);
  expect(todoElement).toHaveClass("todo-item-active");
});
