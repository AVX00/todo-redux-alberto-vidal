import { screen } from "@testing-library/react";
import App from "./App";
import { renderInStore } from "./setupTests";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render the a list element with name walk the dog", async () => {
      const textToFind = "walk the dog";

      renderInStore(<App />);

      const text = await screen.findByText(textToFind);

      expect(text).toBeInTheDocument();
    });
  });
});
