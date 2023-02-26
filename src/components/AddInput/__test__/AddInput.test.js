import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

it("should render input element", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/type.../i);
  expect(inputElement).toBeInTheDocument();
});

it("should be able to type in input", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/type.../i);
  fireEvent.change(inputElement, {
    target: { value: "go skatepark" },
  });
  expect(inputElement.value).toBe("go skatepark");
});

it("should be able to clear input on button click", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

  const inputElement = screen.getByPlaceholderText(/type.../i);
  fireEvent.change(inputElement, {
    target: { value: "go skatepark" },
  });

  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe("");
});
