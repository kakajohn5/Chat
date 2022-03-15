import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/med4u/login" element={<Login />} />
      <Route path="/med4u/register" element={<Register />} /> 


      
    </Routes>
  </BrowserRouter>,
      
    </div>
  );
}

export default App;