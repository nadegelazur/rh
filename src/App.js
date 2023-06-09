import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Employee from "./pages/Employee/Employee.jsx";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee-list" element={<Employee />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
