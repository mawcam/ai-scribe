import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainForm from "./components/forms/MainForm";
import PatientList from "./components/PatientList";
import PatientDetail from "./components/PatientDetail";
import "./global.css";
import NoteDetail from "./components/NoteDetail";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-header">
        <Link to="/" className="app-title">
          <h1>AI Scribe</h1>
        </Link>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-form-section">
          <MainForm />
        </div>
        <div className="dashboard-list-section">
          <PatientList />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/patient/:id" element={<PatientDetail />} />
        <Route
          path="/patient/:patientId/note/:noteId"
          element={<NoteDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
