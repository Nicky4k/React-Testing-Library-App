import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("ToDo Footer Tests", () => {
  test("task count", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    const numberOfTasks = screen.getByText(/5 tasks left/i);
    expect(numberOfTasks).toBeInTheDocument();
  });

  describe("testing singluar cases", () => {
    test("task count singluar", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);

      const numberOfTasks = screen.getByText(/1 task left/i);
      expect(numberOfTasks).toBeInTheDocument();
    });

    test("task count by attribute", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);

      const numberOfTasks = screen.getByTestId("para");
      expect(numberOfTasks.textContent).toBe("1 task left");
    });
  });
});
