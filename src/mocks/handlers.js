// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        todo: [
          { name: "walk the dog", id: 1, done: false },
          { name: "scan project with sonar", id: 2, done: false },
          { name: "todo-app", id: 3, done: false },
        ],
      })
    );
  }),
];
