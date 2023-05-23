import "./styles/styles.css";
import { Form } from "./components/Form";
import { InputForm } from "./utils/inputForms";
import { List } from "./components/List";
import { ApiTest } from "./components/ApiTest";
import { TaskDetail } from "./components/TaskDetail";
import { Route, Routes, Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Start</h1>
      <List />
      <Form />
      <ApiTest />

      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
