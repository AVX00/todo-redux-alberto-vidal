import { createTask, deleteTask, loadTasks } from "./actionsCreator";
import { actionTypes } from "./actionsTypes";

describe("Givena an actions creator load tasks", () => {
  describe("When it receives an array of tasks", () => {
    test("Then it should return an action with the given tasks and type load tasks", () => {
      const tasks = [{ name: "walk the dog" }];
      const expectedAction = {
        type: actionTypes.loadTasks,
        tasks,
      };

      const action = loadTasks(tasks);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an action creator delete task", () => {
  describe("When it receibes an id", () => {
    test("Then it should return an action with the given id and type delete task", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteTask,
        id,
      };

      const action = deleteTask(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an action createor create task", () => {
  describe("When it receives a name 'hola'", () => {
    test("Then it should return an action with type create class and a task with name 'hola' and done = false", () => {
      const name = "hola";
      const done = false;
      const expectedAction = {
        type: actionTypes.createTask,
        task: { name, done },
      };

      const action = createTask(name);
      console.log();
      expect(action).toEqual(expectedAction);
    });
  });
});
