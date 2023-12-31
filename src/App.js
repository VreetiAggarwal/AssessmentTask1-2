import "./App.css";
import { Routes, Route } from "react-router-dom";
import Display from "./components/pages/JsonDisplay";
import InputFile from "./components/pages/InputFile";
import OutputFile from "./components/pages/Output";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Task 2: Path --> */}
        <Route path="/" element={<InputFile />}></Route>
        <Route path="/output" element={<OutputFile />}></Route>

        {/* Task 1: Path --> */}
        <Route path="/display" element={<Display />}></Route>
      </Routes>
    </div>
  );
}

export default App;
