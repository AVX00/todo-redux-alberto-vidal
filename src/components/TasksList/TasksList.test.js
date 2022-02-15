import { screen } from "@testing-library/react";
import { renderInStore } from "../../setupTests";
import TasksList from "./TasksList";

describe("Given a TasksList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a list with name tasks", () => {
      renderInStore(<TasksList />);

      const list = screen.queryByRole("list", { name: /tasks/i });

      expect(list).toBeInTheDocument();
    });
  });

  describe("When it's rendered passin two tasks with name 'water the plants' and 'greet the neighbors'", () => {
    test("Then it should render booth names", () => {
      const tasks = [
        { name: "water the plants", id: 1 },
        { name: "greet the neighbors", id: 2 },
      ];

      renderInStore(<TasksList tasks={tasks} />);
      const firstText = screen.queryByText(tasks[0].name);
      const secondText = screen.queryByText(tasks[1].name);

      expect(firstText).toBeInTheDocument();
      expect(secondText).toBeInTheDocument();
    });
  });
});
