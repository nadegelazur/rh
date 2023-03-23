import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Employee from "./pages/Employee.jsx";
import Error from "./pages/Error.jsx";
import UserList from "./features/UserList.js";


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
