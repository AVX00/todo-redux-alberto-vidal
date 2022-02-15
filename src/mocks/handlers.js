// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        { name: "walk the dog", id: 1, done: false },
        { name: "scan project with sonar", id: 2, done: false },
        { name: "todo-app", id: 3, done: false },
      ])
    )
  ),

  rest.delete(`${process.env.REACT_APP_API_URL}3`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),

  rest.post(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "hola",
        done: false,
        id: 2,
      })
    )
  ),
];
