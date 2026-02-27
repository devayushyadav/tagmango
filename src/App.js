import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layouts/PublicLayout/PublicLayout";
import "./App.css";
import NineDaysWorkoutPlan from "./pages/9DaysWorkoutPlan/index";

function App() {
  return (
    <Router>
      <PublicLayout>
        <Routes>
          <Route path="/workout-plan/:day" element={<NineDaysWorkoutPlan />} />
        </Routes>
      </PublicLayout>
    </Router>
  );
}

export default App;
