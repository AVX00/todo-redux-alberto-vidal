import {
  createTaskAction,
  deleteTaskAction,
  loadTasksAction,
} from "../actions/actionsCreator";
import tasksReducer from "./tasksReducer";

describe("Given a tasks reducer", () => {
  describe("When it receives the current tasks and an action with type load and an array of tasks", () => {
    test("Then it should return a new state with the array of tasks inside the action", () => {
      const currentTasks = [];
      const expectedNewState = [{ name: "walk the dog" }];
      const tasks = [{ name: "walk the dog" }];
      const action = loadTasksAction(tasks);

      const newState = tasksReducer(currentTasks, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives the current tasks and an action delete with id 1", () => {
    test("Then it should return a new state without the element with id 1", () => {
      const currentTasks = [
        { name: "aaa", id: 1 },
        { name: "walk the dog", id: 2 },
      ];
      const expectedNewState = [{ name: "walk the dog", id: 2 }];
      const action = deleteTaskAction(1);

      const newState = tasksReducer(currentTasks, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives the current tasks and no action", () => {
    test("then it should return a new state equal to the previous one", () => {
      const currentTasks = [
        { name: "aaa", id: 1 },
        { name: "walk the dog", id: 2 },
      ];

      const newState = tasksReducer(currentTasks);

      expect(newState).toEqual(currentTasks);
    });
  });

  describe("When the state has a task and it receives a create action with a new task", () => {
    test("Then the new state should contain 2 tasks", () => {
      const expectedLenght = 2;
      const currentTasks = [{ name: "aaa", id: 1 }];
      const action = createTaskAction("walk the dog");

      const newState = tasksReducer(currentTasks, action);

      expect(newState).toHaveLength(expectedLenght);
    });
  });

  describe("When it receives nothing", () => {
    test("Then it should return an empty array", () => {
      const newstate = tasksReducer();

      expect(newstate).toHaveLength(0);
    });
  });
});
