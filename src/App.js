import "./App.css";
import Counter from "./Counter";
import Country from "./Country";
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

      <Country />
    </>
  );
}

export default App;
