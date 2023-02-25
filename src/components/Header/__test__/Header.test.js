import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders TODO", () => {
  render(<Header title="TODO" />);

  const headerTitle = screen.getByText(/todo/i);
  expect(headerTitle).toBeInTheDocument();
});

it("renders by Role", () => {
  render(<Header title="TODO" />);

  const headerTitle = screen.getByRole("heading");
  expect(headerTitle).toBeInTheDocument();
});

it("renders not present in document", () => {
  render(<Header title="TODO" />);

  const headerTitle = screen.queryByText(/followers/i);
  expect(headerTitle).not.toBeInTheDocument();
});
