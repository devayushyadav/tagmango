import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout/PublicLayout";
import "./App.css";
import NineDaysWorkoutPlan from "./pages/9DaysWorkoutPlan/index";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <PublicLayout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/9-day-workout-plan/:day"
            element={<NineDaysWorkoutPlan />}
          />
        </Routes>
      </PublicLayout>
    </Router>
  );
}

export default App;
