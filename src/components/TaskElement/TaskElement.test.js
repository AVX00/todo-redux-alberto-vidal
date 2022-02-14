import { render, screen } from "@testing-library/react";
import TaskElement from "./TaskElement";

describe("Given a TaskElement component", () => {
  describe("When it's renedered passing a task with name 'walk the dog'", () => {
    test("Then it should render the text 'walk the dog'", () => {
      const task = { name: "walk the dog" };

      render(<TaskElement task={task} />);
      const text = screen.queryByText(task.name);

      expect(text).toBeInTheDocument();
    });
  });
});
