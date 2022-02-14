import TasksList from "./components/TasksList/TasksList";
const tasksApi = [
  { name: "walk the dog", id: 1 },
  { name: "scan project with sonar", id: 2 },
];

function App() {
  return (
    <>
      <TasksList tasks={tasksApi} />
    </>
  );
}

export default App;
