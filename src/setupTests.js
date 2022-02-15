import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { server } from "./mocks/server.js";
import store from "./redux/store/index.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export const renderInStore = (components) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(components, { wrapper: Providers });
};
