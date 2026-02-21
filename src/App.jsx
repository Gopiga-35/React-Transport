import Car from "./transport/Car";
import Truck from "./transport/Truck";
import Bike from "./transport/Bike";
import Header from "./transport/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Car />} />
        <Route path="/car" element={<Car />} />
        <Route path="/truck" element={<Truck />} />
        <Route path="/bike" element={<Bike />} />
      </Routes>
    </Router>
  );
}

export default App;