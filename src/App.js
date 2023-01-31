import "./App.css";
import Counter from "./Counter";
import Countries from "./Countries";
import Person from "./Person";

function App() {
  return (
    <>
      <div>
        <Person name="Amin" age="34" occupation="Actor" />
        <Person name="Abul" age="24" occupation="Shopkeeper" />
        <Person name="Karim" age="14" occupation="Student" />
      </div>

      <Counter />

    <Countries />

    </>
  );
}

export default App;
