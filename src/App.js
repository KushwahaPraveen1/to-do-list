import "./App.css";
import Todo from "./components/Todo";
import Particles from './components/Particles';

function App() {
  return (
    <div className="container">
      <Todo />
      <Particles id="tsparticles" />
    </div>
    
  );
}
export default App;