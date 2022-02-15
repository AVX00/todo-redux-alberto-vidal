import {
  findByText,
  getByText,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";
import { renderInStore } from "./setupTests";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the a list element with name walk the dog", async () => {
      const textToFind = "walk the dog";

      renderInStore(<App />);

      const text = await screen.findByText(textToFind);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered and clicked on the delete button from the third task with text 'todo-app", () => {
    test("Then it should disapear", async () => {
      const text = "todo-app";
      renderInStore(<App />);
      const tasks = await screen.findAllByRole("link", { name: /x/i });
      userEvent.click(tasks[2]);
      await waitForElementToBeRemoved(() => screen.queryByText(text));

      expect(tasks[2]).not.toBeInTheDocument();
    });
  });

  describe("When it's rendered and an user types 'hola' in the form and clicks on submit", () => {
    test("Then the text 'hola' should display in the page", async () => {
      const text = "hola";
      renderInStore(<App />);

      const input = screen.queryByLabelText(/new task/i);
      const submitButton = screen.queryByRole("button", /create task/i);
      userEvent.type(input, text);
      userEvent.click(submitButton);

      const task = await screen.findByText(text);
      expect(task).toBeInTheDocument();
    });
  });
});
