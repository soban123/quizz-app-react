import "./App.css";
import { questions } from "./questions";
import Quiz from "./pages/quiz";
function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
