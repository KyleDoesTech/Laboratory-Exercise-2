
import { useState } from "react";
import Exam from './components/Exam';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {!started ? (
        <div>
          <h1>Welcome to the React Exam App</h1>
          <p>Please read each question carefully. Your answers will be auto-saved. You can navigate freely. Good luck!</p>
          <button onClick={() => setStarted(true)}>Start Exam</button>
        </div>
      ) : (
        <Exam />
      )}
    </div>
  );
}

export default App;
