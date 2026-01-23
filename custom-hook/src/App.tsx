import { useTime } from "./hooks/useTime";

function App() {
  const day = useTime("day");
  const hour = useTime("hour");

  return (
    <div>
      <h1>React Custom Hook Exercise</h1>
      <div>
        <h3>Day: {day}</h3>
        <h3>Hour: {hour}</h3>
      </div>
    </div>
  );
}

export default App;
